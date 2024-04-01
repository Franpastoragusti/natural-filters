import { useState } from "react";
import styles from "./rangeView.module.css";

interface IRangeProps {
    item: ITextFilter;
    onFinish: (newFilter: ITextFilter) => void;
  }
  export const RangeView = ({ item, onFinish }: IRangeProps) => {
    const [selectorValue, setSelectorValue] = useState<string>("!=");
    const [inputValue, setInputValue] = useState<string>("");
  
    return (
      <div className={styles.rangeContainer}>
        <p>{item.label}</p>
        <div className={styles.rangeInput}>
          <select
            value={selectorValue}
            onChange={(e) => setSelectorValue(e.target.value)}
            name="range"
            id={`${item.id}-range`}
            className={styles.range}
          >
            <option value="==">equal to </option>
            <option value="!=">not equal to </option>
            <option value=">">greater than </option>
            <option value="<">less than </option>
            <option value=">=">greater or equal to </option>
            <option value="<=">less or equal to </option>
          </select>
          <p>than</p>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="number"
            placeholder="0"
          />
        </div>
        <button
          className={styles.save}
          onClick={() =>
            onFinish({ ...item, value: `${selectorValue}${inputValue}` })
          }
        >
          Save
        </button>
      </div>
    );
  };
  