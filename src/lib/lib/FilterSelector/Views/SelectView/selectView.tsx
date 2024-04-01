import { useState } from "react";
import styles from "./selectView.module.css";

interface IRangeProps {
  item: ITextFilter;
  onFinish: (newFilter: ITextFilter) => void;
}
export const SelectView = ({ item, onFinish }: IRangeProps) => {
  const [selectorValue, setSelectorValue] = useState<string>(item.options![0].value);

  return (
    <div className={styles.rangeContainer}>
      <p>{item.label}</p>
      <div className={styles.rangeInput}>
        <select
          value={selectorValue}
          onChange={(e) => setSelectorValue(e.target.value)}
          name="range"
          className={styles.range}
        >
          {item.options?.map((item, i) => (
            <option key={i} value={item.value}>{item.label}</option>
          ))}
        </select>
      </div>
      <button
        className={styles.save}
        onClick={() => onFinish({ ...item, value: selectorValue })}
      >
        Save
      </button>
    </div>
  );
};
