import { useRef } from "react";
import { operatorTranscription } from "../helpers/transcriptor";
import styles from "./filterInput.module.css";
interface IProps {
  filters: ITextFilter[];
  operators: string[];
  onDelete: () => void;
  onFocus: () => void;
  onFilterClicked: (index: number) => void;
  showCursor: boolean;
}

export const FilterInput = ({
  filters,
  onFocus,
  onDelete,
  onFilterClicked,
  operators,
  showCursor
}: IProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const getRenderString = (filter: ITextFilter, operator = "") => {
    if (filter.type === "Range") {
      return `${filter.renderText} ${operatorTranscription(
        filter.value!
      )} ${filter.value!.replace(/\D/g, "")} ${operator}`;
    }
    if (filter.type === "Selector") {
      let selectedOption = filter.options?.find((option) => option.value=== filter.value);
      return `${filter.renderText} ${selectedOption?.label} ${operator}`;
    }
    return `${filter.renderText} ${operator}`;
  };
  const renderText =
    filters.map((item, i) => getRenderString(item, operators[i]))

  return (
    <div
      className={styles.inputContainer}
      onClick={() => {
        onFocus();
        if (inputRef.current) inputRef.current.focus();
      }}
    >
      <p>
        {`Give me projects that `}
        {renderText.map((it,i) => <span className={styles.filter} onClick={(e) => {
          e.preventDefault();
          e.stopPropagation()
          onFilterClicked(i)
        }} key={i}>{" "}{it}{" "}</span>)}
        {showCursor ? <span className={styles.cursor}>|</span>:<></>}
      </p>
      <input
        ref={inputRef}
        type="text"
        className={styles.input}
        value={`Give me projects that ${renderText}`}
        onChange={() => null}
        onBlur={() => null}
        onKeyDown={(e) => {
          if (e.key === "Backspace") {
            onDelete();
          }
        }}
      ></input>
    </div>
  );
};
