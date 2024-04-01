import { useState } from "react";
import styles from "./filterManager.module.css";
import { FilterSelector } from "../FilterSelector/filterSelector";
import { FilterInput } from "../FilterInput/filterInput";
import { OperatorSelector } from "../OperatorSelector/operatorSelector";

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
  const [isSelectorActive, setIsSelectorActive] = useState(false);
  const [isOperatorActive, setIsOperatorActive] = useState(false);
  const [search, setSearch] = useState("");

  const onFilterSelected = (filter: ITextFilter) => {
    console.log("adawdwad")
    setIsSelectorActive(false);
    setFilterState({
      filters: [...filterState?.filters, filter],
      operators: filterState?.operators,
    });
    setIsOperatorActive(true);
  };

  const onOperatorSelected = (operator: string) => {
    if(operator !== "END"){
      setFilterState({
        filters: filterState?.filters,
        operators: [...filterState?.operators, operator],
      });
    }
    setIsOperatorActive(false);
    setIsSelectorActive(operator !== "END");
  };
  const onSearch = (text: string) => {
    setSearch(text);
  };

  return (
    <div className={styles.filterContainer}>
      {!!isSelectorActive ? (
        <FilterSelector
          config={config}
          onSearch={(text) => onSearch(text)}
          onFilterSelected={(filter) => onFilterSelected(filter)}
          search={search}
        />
      ) : (
        <></>
      )}
      {!!isOperatorActive ? (
        <OperatorSelector
          onSelected={(operator) => onOperatorSelected(operator)}
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
        operators={filterState?.operators || []}
        onFocus={() => {
          if(filterState.filters.length > filterState.operators.length){
            setIsOperatorActive(true)
          }else{
            setIsSelectorActive(true);
          }
        }}
      />
    </div>
  );
};
