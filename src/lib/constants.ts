export const MOCK_FILTERS: ITextFilter[] = [
  {
    label: "On chain projects",
    renderText: "are onchain",
    description: "Only include projects that are onchain",
    type: "Checkbox",
    id: "project-onchain",
  },
  {
    label: "End User Experience and Adoption",
    renderText: "are in adoption",
    description: "Projects whose category is “End User Experience and Adoption”",
    type: "Checkbox",
    id: "project-adoption",
  },
  {
    label: "Contracts deployed",
    renderText: "contracts deployed are",
    description: "Amount of contracts deployed",
    type: "Range",
    options: [],
    id: "contracts-deployed",
  },
  {
    label: "Include",
    renderText: "include the ones that",
    description: "Include different options",
    type: "Selector",
    options: [
      {
        label: "have VC funding",
        value: "funding-vc",
      },
      {
        label: "have not prior funding",
        value: "funding-none",
      },
      {
        label: "have grants funding",
        value: "grant-funding",
      },
    ],
    id: "include-funding",
  },
  {
    label: "Exclude",
    renderText: "exclude the ones that",
    description: "Exclude different options",
    type: "Selector",
    options: [
      {
        label: "have VC funding",
        value: "funding-vc",
      },
      {
        label: "have not prior funding",
        value: "funding-none",
      },
      {
        label: "have grants funding",
        value: "grant-funding",
      },
    ],
    id: "exclude-funding",
  },
];
