import styles from "./operatorSelector.module.css";
interface IProps {
  onSelected: (id: string) => void;
}
export const OperatorSelector = ({
  onSelected,
}: IProps) => {

  return (
    <div className={styles.selector}>
       <button onClick={() => onSelected("AND")}>AND</button>
       <button onClick={() => onSelected("OR")}>OR</button>
       <button onClick={() => onSelected("END")}>END</button>
    </div>
  );
};
