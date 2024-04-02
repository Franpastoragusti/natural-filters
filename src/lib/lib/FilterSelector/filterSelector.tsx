import styles from "./filterSelector.module.css";
import { RangeView } from "./Views/RangeView/rangeView";
import { SelectView } from "./Views/SelectView/selectView";
interface IProps {
  config: ITextFilter[];
  onSearch: (text: string) => void;
  onFilterAdded: (id: ITextFilter) => void;
  search: string;
  activeFilter:ITextFilter | null;
  setActiveFilter:(filter:ITextFilter | null) => void;
}
export const FilterSelector = ({
  config,
  search,
  onSearch,
  onFilterAdded,
  activeFilter,
  setActiveFilter
}: IProps) => {

  const onFilterClicked = (filter: ITextFilter) => {
    setActiveFilter(filter);
    if (filter.type !== "Checkbox" && filter.type !== "Group") {
      return;
    }
    onFilterAdded(filter);
  };

  console.log(activeFilter)
  return (
    <div className={styles.selector}>
      {!activeFilter ? (
        <>
          <input
            type="search"
            value={search}
            className={styles.searcher}
            onChange={(e) => onSearch(e.target.value)}
          />
          <ul className={styles.filterList}>
            {config
              .filter((it) => it.label.toLowerCase().includes(search.toLowerCase()))
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
      ) : (
        <></>
      )}
      {activeFilter?.type === "Range" ? (
        <RangeView
          item={activeFilter}
          onFinish={(newFilter) => onFilterAdded(newFilter)}
        />
      ) : (
        <></>
      )}
      {activeFilter?.type === "Selector" ? (
        <SelectView
          item={activeFilter}
          onFinish={(newFilter) => onFilterAdded(newFilter)}
        />
      ) : (
        <></>
      )}
    </div>
  );
};
