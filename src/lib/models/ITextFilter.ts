interface ITextFilter {
  label: string;
  renderText: string;
  description: string;
  type: "Checkbox" | "Selector" | "Date" | "Range" | "Group";
  options?: IOption[];
  value?: string;
  items?: IFullFilter;
  id: string;
}
interface ITextFilterOutput {
  id: string;
  type: "Checkbox" | "Selector" | "Date" | "Range" | "Group";
  value: string | ITextFilterOutput[] | true;
  operator?: string;
}
interface IOption {
  label: string;
  value: string;
}

interface IFullFilter {
  filters: ITextFilter[];
  operators: string[];
}
