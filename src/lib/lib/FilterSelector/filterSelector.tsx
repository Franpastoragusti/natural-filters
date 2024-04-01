import { useState } from "react";
import styles from "./filterSelector.module.css";
import { RangeView } from "./Views/RangeView/rangeView";
interface IProps {
  config: ITextFilter[];
  onSearch: (text: string) => void;
  onFilterSelected: (id: ITextFilter) => void;
  search: string;
}
export const FilterSelector = ({
  config,
  search,
  onSearch,
  onFilterSelected,
}: IProps) => {
  const [activeFilter, setActiveFilter] = useState<ITextFilter | null>(
    null
  );

  const onFilterClicked = (filter: ITextFilter) => {
    setActiveFilter(filter);
    if (filter.type === "Range") {
      return;
    }
    onFilterSelected(filter);
  };

  const onFinishFilter = (filter: ITextFilter) => {
    setActiveFilter(null);
    onFilterSelected(filter);
  };

  const SearchView = () => {
    return (
      <>
        <input
          type="search"
          value={search}
          className={styles.searcher}
          onChange={(e) => onSearch(e.target.value)}
        />
        <ul className={styles.filterList}>
          {config
            .filter((it) => it.label.includes(search))
            .map((item, i) => (
              <li
                key={`filter-${i}`}
                onClick={() => {
                  onFilterClicked(item);
                }}
              >
                {item.label}
              </li>
            ))}
        </ul>
      </>
    );
  };

  return (
    <div className={styles.selector}>
      {!activeFilter ? <SearchView /> : <></>}
      {activeFilter?.type === "Range" ? (
        <RangeView
          item={activeFilter}
          onFinish={(newFilter) => onFinishFilter(newFilter)}
        />
      ) : (
        <></>
      )}
    </div>
  );
};
