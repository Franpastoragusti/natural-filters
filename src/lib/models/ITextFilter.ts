interface ITextFilter{
    label:string
    renderText:string
    description:string
    type:"Checkbox"|"Selector"|"Date"|"Range"
    options?:IOption[]
    value?:string
    id:string
}

interface IOption{
    label:string,
    value:string
}
