import { useEffect, useState } from "react";
import styles from "./filterManager.module.css";
import { FilterSelector } from "../FilterSelector/filterSelector";
import { FilterInput } from "../FilterInput/filterInput";
import { OperatorSelector } from "../OperatorSelector/operatorSelector";

interface IFilterManager {
  config: ITextFilter[];
  onFilterChanged:(e:any) => void
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

  useEffect(() => {
    let results = filterState.filters.map((item, i) => ({
      filter:item.id,
      value:item.value || true,
      operator:filterState.operators[i],
    }))
    console.log(results)
    return () => {
      
    }
  }, [filterState.filters, filterState.operators])
  

  return (
    <div className={styles.filterContainer} onKeyDown={(e) => console.log(e.key)}>
      <FilterInput
        showCursor={isOperatorActive || isSelectorActive}
        onDelete={() => {
          setIsOperatorActive(false)
          setIsSelectorActive(false)
          let isOperatorLatest= filterState?.operators.length >= filterState.filters.length;
          setFilterState({
            filters:isOperatorLatest ? filterState.filters: [
              ...filterState?.filters.splice(
                0,
                filterState?.filters.length - 1
              ),
            ],
            operators:  [
              ...filterState?.operators.splice(
                0,
                filterState?.operators.length - 1
              ),
            ],
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
          onFilterSelected={(filter) => onFilterSelected(filter)}
          search={search}
        />
      ) : (
        <></>
      )}
    </div>
  );
};
