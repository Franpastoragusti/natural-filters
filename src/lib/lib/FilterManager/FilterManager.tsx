import { useState } from "react";
import styles from "./filterManager.module.css";
import { FilterSelector } from "../FilterSelector/filterSelector";
import { FilterInput } from "../FilterInput/filterInput";

interface IFilterManager {
  config: ITextFilter[];
}

interface IFilterManagerState {
  filters: ITextFilter[];
  operators: string[];
}

export const FilterManager = ({ config }: IFilterManager) => {
  const [filterState, setFilterState] = useState<IFilterManagerState>({
    filters: [],
    operators: [],
  });
  const [managerStatus, setManagerStatus] = useState(false);
  const [search, setSearch] = useState("");

  const onFilterSelected = (filter: ITextFilter) => {
    console.log("adawdwad")
    setManagerStatus(false);
    setFilterState({
      filters: [...filterState?.filters, filter],
      operators: filterState?.operators,
    });
    console.log("onFilterSelected", filter);
  };
  const onSearch = (text: string) => {
    setSearch(text);
  };

  return (
    <div className={styles.filterContainer}>
      {!!managerStatus ? (
        <FilterSelector
          config={config}
          onSearch={(text) => onSearch(text)}
          onFilterSelected={(filter) => onFilterSelected(filter)}
          search={search}
        />
      ) : (
        <></>
      )}
      <FilterInput
        onDelete={() => {
          setFilterState({
            filters: [
              ...filterState?.filters.splice(
                0,
                filterState?.filters.length - 1
              ),
            ],
            operators: filterState?.operators,
          });
        }}
        filters={filterState?.filters|| []}
        onFocus={() => setManagerStatus(true)}
      />
    </div>
  );
};
