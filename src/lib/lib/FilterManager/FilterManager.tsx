import { useEffect, useState } from "react";
import styles from "./filterManager.module.css";
import { FilterSelector } from "../FilterSelector/filterSelector";
import { FilterInput } from "../FilterInput/filterInput";
import { OperatorSelector } from "../OperatorSelector/operatorSelector";
import { v4 as uuidv4 } from "uuid";
import { FilterSave } from "../FilterSave/filterSave";

interface IFilterManager {
  config: ITextFilter[];
  onFilterChanged: (e: any) => void;
}

export const FilterManager = ({ config }: IFilterManager) => {
  const [filterState, setFilterState] = useState<IFullFilter>({
    filters: [],
    operators: [],
  });
  const [isSelectorActive, setIsSelectorActive] = useState(false);
  const [isSavingFilter, setIsSavingFilter] = useState(false);
  const [isOperatorActive, setIsOperatorActive] = useState(false);
  const [activeFilter, setActiveFilter] = useState<ITextFilter | null>(null);
  const [customFilters, setCustomFilters] = useState<ITextFilter[]>([]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    let res = localStorage.getItem("text-to-filters");
    if (!res) {
      return;
    }
    let parsedRes = JSON.parse(res);
    setCustomFilters(parsedRes);

    return () => {};
  }, []);

  const onFilterAdded = (filter: ITextFilter) => {
    setIsSelectorActive(false);
    if (filter.type === "Custom") {
      let type = customFilters.find((f) => f.id === filter.id);
      if (type?.items) {
        setFilterState(type.items);
      }
      setActiveFilter(null);
      setIsOperatorActive(true);
      return;
    }
    let isUpdate = filter.id.includes("__");
    if (!isUpdate) {
      filter.id = filter.id + "__" + uuidv4();
    }
    setFilterState({
      filters: isUpdate
        ? [
            ...filterState?.filters.map((it) =>
              it.id === filter.id ? filter : it
            ),
          ]
        : [...filterState?.filters, filter],
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

  const onFilterEdit = (index: number) => {
    if (filterState?.filters[index].type === "Checkbox") {
      return;
    }
    setActiveFilter(filterState?.filters[index]);
    setIsOperatorActive(false);
    setIsSelectorActive(true);
  };

  const onSaveFilters = (name: string, description: string) => {
    let id = uuidv4();
    let saveFilter: ITextFilter = {
      label: name,
      renderText: "contracts deployed are",
      description: description,
      type: "Custom",
      options: [],
      id: `custom_${id}`,
      items: {
        filters: filterState?.filters,
        operators: filterState?.operators,
      },
    };
    localStorage.setItem(
      "text-to-filters",
      JSON.stringify([...customFilters, saveFilter])
    );
    setCustomFilters((current) => [...current, saveFilter]);
    setIsSavingFilter(false);
    setFilterState({
      filters: [],
      operators: [],
    });
  };

  return (
    <div className={styles.filterContainer}>
      <FilterInput
        onSaveFilters={() => {
          setIsOperatorActive(false);
          setIsSelectorActive(false);
          setActiveFilter(null);
          setIsSavingFilter(true);
        }}
        onFilterClicked={(it) => onFilterEdit(it)}
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
          config={[...config, ...customFilters]}
          onSearch={(text) => onSearch(text)}
          onFilterAdded={(filter) => onFilterAdded(filter)}
          search={search}
          activeFilter={activeFilter}
          setActiveFilter={(it) => setActiveFilter(it)}
        />
      ) : (
        <></>
      )}
      {!!isSavingFilter ? (
        <FilterSave onSaveFilters={(n, d) => onSaveFilters(n, d)} />
      ) : (
        <></>
      )}
    </div>
  );
};
