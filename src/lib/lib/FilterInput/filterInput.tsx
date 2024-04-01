import { operatorTranscription } from "../helpers/transcriptor";

interface IProps {
  filters: ITextFilter[];
  onDelete: () => void;
  onFocus: () => void;
}

export const FilterInput = ({ filters, onFocus, onDelete }: IProps) => {


  const getRenderString = (filter:ITextFilter) => {
    if(filter.type === "Range"){
      return `${filter.renderText} ${operatorTranscription(filter.value!)} ${filter.value!.replace(/\D/g, '')}`
    }
    return filter.renderText
  }
  const renderText = filters.map((item) => getRenderString(item)) || "";

  return (
    <textarea
      onClick={() => onFocus()}
      value={`Give me projects where ${renderText}`}
      onChange={(e) => null}
      onKeyDown={(e) => {
        if (e.key === "Backspace") {
          onDelete();
        }
      }}
    ></textarea>
  );
};
