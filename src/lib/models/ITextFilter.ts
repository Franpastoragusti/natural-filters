interface ITextFilter{
    label:string
    renderText:string
    description:string
    type:"Checkbox"|"Selector"|"Date"|"Range"|"Custom"
    options?:IOption[]
    value?:string
    items?:IFullFilter
    id:string
}

interface IOption{
    label:string,
    value:string
}

interface IFullFilter{
    filters: ITextFilter[];
    operators: string[];
}