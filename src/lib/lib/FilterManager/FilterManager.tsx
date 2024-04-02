import { useEffect, useState } from "react";
import styles from "./filterManager.module.css";
import { FilterSelector } from "../FilterSelector/filterSelector";
import { FilterInput } from "../FilterInput/filterInput";
import { OperatorSelector } from "../OperatorSelector/operatorSelector";

interface IFilterManager {
  config: ITextFilter[];
  onFilterChanged: (e: any) => void;
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
  const [isSelectorActive, setIsSelectorActive] = useState(false);
  const [isOperatorActive, setIsOperatorActive] = useState(false);
  const [activeFilter, setActiveFilter] = useState<ITextFilter | null>(null);
  const [search, setSearch] = useState("");

  const onFilterAdded = (filter: ITextFilter) => {
    setIsSelectorActive(false);
    setFilterState({
      filters: [...filterState?.filters, filter],
      operators: filterState?.operators,
    });
    setActiveFilter(null);
    setIsOperatorActive(true);
  };

  const onOperatorSelected = (operator: string) => {
    if (operator !== "END") {
      setFilterState({
        filters: filterState?.filters,
        operators: [...filterState?.operators, operator],
      });
    }
    setIsOperatorActive(false);
    setActiveFilter(null);
    setIsSelectorActive(operator !== "END");
  };
  const onSearch = (text: string) => {
    setSearch(text);
  };

  const onDelete = () => {
    setIsOperatorActive(false);
    setIsSelectorActive(false);
    setActiveFilter(null);
    let isOperatorLatest =
      filterState?.operators.length >= filterState.filters.length;
    setFilterState({
      filters: isOperatorLatest
        ? filterState.filters
        : [...filterState?.filters.splice(0, filterState?.filters.length - 1)],
      operators: [
        ...filterState?.operators.splice(0, filterState?.operators.length - 1),
      ],
    });
  };

  useEffect(() => {
    let results = filterState.filters.map((item, i) => ({
      filter: item.id,
      value: item.value || true,
      operator: filterState.operators[i],
    }));
    return () => {};
  }, [filterState.filters, filterState.operators]);
  const onFilterClicked = (index:number)=>{
    console.log(index)
  }
  console.log(isOperatorActive, isSelectorActive);
  return (
    <div
      className={styles.filterContainer}
      onKeyDown={(e) => console.log(e.key)}
    >
      <FilterInput
        onFilterClicked={(it) => onFilterClicked(it)}
        showCursor={isOperatorActive || isSelectorActive}
        onDelete={() => onDelete()}
        filters={filterState?.filters || []}
        operators={filterState?.operators || []}
        onFocus={() => {
          if (filterState.filters.length > filterState.operators.length) {
            setIsOperatorActive(true);
          } else {
            setIsSelectorActive(true);
          }
        }}
      />
      {!!isOperatorActive ? (
        <OperatorSelector
          onSelected={(operator) => onOperatorSelected(operator)}
        />
      ) : (
        <></>
      )}
      {!!isSelectorActive ? (
        <FilterSelector
          config={config}
          onSearch={(text) => onSearch(text)}
          onFilterAdded={(filter) => onFilterAdded(filter)}
          search={search}
          activeFilter={activeFilter}
          setActiveFilter={(it) => setActiveFilter(it)}
        />
      ) : (
        <></>
      )}
    </div>
  );
};
