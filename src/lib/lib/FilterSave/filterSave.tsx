import { useState } from "react";
import styles from "./filterSave.module.css";
interface IProps {
  onSaveFilters:(name:string, description:string)=> void
}

export const FilterSave = ({onSaveFilters}: IProps) => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")

  return (
    <div className={styles.selector}>
      <label htmlFor="name">Filter name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        className={styles.input}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <label htmlFor="description">Filter Description</label>
      <input
        type="text"
        id="description"
        value={description}
        name="description"
        className={styles.input}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button
        className={styles.save}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onSaveFilters(name, description)
        }}
      >
        Save
      </button>
    </div>
  );
};
