import { operatorTranscription } from "../helpers/transcriptor";

interface IProps {
  filters: ITextFilter[];
  operators: string[];
  onDelete: () => void;
  onFocus: () => void;
}

export const FilterInput = ({ filters, onFocus, onDelete, operators }: IProps) => {


  const getRenderString = (filter:ITextFilter, operator = "") => {
    if(filter.type === "Range"){
      return `${filter.renderText} ${operatorTranscription(filter.value!)} ${filter.value!.replace(/\D/g, '')} ${operator}`
    }
    return `${filter.renderText} ${operator}`
  }
  const renderText = filters.map((item, i) => getRenderString(item, operators[i])).join(' ') || "";
  return (
    <textarea
      onClick={() => onFocus()}
      value={`Give me projects that ${renderText}`}
      onChange={() => null}
      onKeyDown={(e) => {
        if (e.key === "Backspace") {
          onDelete();
        }
      }}
    ></textarea>
  );
};
