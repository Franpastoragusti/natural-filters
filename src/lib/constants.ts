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
  // Remove the above as they may be duplicated below
  {
    label: "Applicant Type",
    renderText: "applicant type is",
    description: "Filter by type of applicant",
    type: "Selector",
    options: [
      {
        label: "project",
        value: "applicant-project",
      },
      {
        label: "individual",
        value: "applicant-individual",
      }
    ]
    id: "applicant-type",
  },
  {
    label: "Category",
    renderText: "is in the '{{CATEGORY}}' category",
    description: "Select projects in a particular category",
    type: "Selector",
    options: [
      {
        label: "Collective Governance",
        value: "category-collective-governance",
      },
      {
        label: "Developer Ecosystem",
        value: "category-developer-ecosystem",
      },
      {
        label: "End User Experience and Adoption",
        value: "category-end-user-experience",
      },
      {
        label: "OP Stack",
        value: "category-op-stack",
      },
    ]
    id: "category",
  },
  {
    label: "Funding",
    renderText: "funding from '{{source}}' source is",
    description: "Amount of funding from a specific source",
    type: "Selector+Range", // Not sure how this should be formatted
    options: [
      {
        label: "Other",
        value: "funding-other",
      },
      {
        label: "Partner",
        value: "funding-partner",
      },
      {
        label: "Revenue",
        value: "funding-revenue",
      },
      {
        label: "RetroPGF Round 1",
        value: "funding-rpgf1",
      },
      {
        label: "RetroPGF Round 2",
        value: "funding-rpgf2",
      },
      {
        label: "RetroPGF Round 3",
        value: "funding-rpgf3",
      },
      {
        label: "Venture Capital",
        value: "funding-vc",
      },
    ]
    id: "funding",
  },
  {
    label: "Total Funding",
    renderText: "total funding is",
    description: "Amount of funding project has received from all sources",
    type: "Range",
    options: [],
    id: "total-funding",
  },
  {
    label: "Contracts Deployed On Chain",
    renderText: "contracts deployed on {{chain}} is",
    description: "Amount of contracts deployed on a specific chain",
    type: "Selector+Range", // Not sure how this should be formatted
    options: [
      {
        label: "Optimism",
        value: "contracts-optimism",
      },
      {
        label: "Base",
        value: "contracts-base",
      },
      {
        label: "Mantle",
        value: "contracts-mantle",
      },
      {
        label: "Zora",
        value: "contracts-zora",
      },
      {
        label: "Worldcoin",
        value: "contract-worldcoin",
      },
      {
        label: "Celo",
        value: "contracts-celo",
      },
      {
        label: "Mode",
        value: "contracts-mode",
      },
    ]
    id: "contracts",
  },
  {
    label: "Total Contracts",
    renderText: "total contracts is",
    description: "Amount contracts deployed across all OP Stack chains",
    type: "Range",
    options: [],
    id: "total-contracts",
  },
  {
    label: "Total Onchain Users",
    renderText: "total onchain users are",
    description: "Amount of users who have interacted with the project onchain",
    type: "Range",
    options: [],
    id: "total-onchain-users",
  },
  {
    label: "Onchain Users Last 6 Months",
    renderText: "onchain users in the last 6 months are",
    description: "Number of users who have interacted with the project onchain in the last 6 months",
    type: "Date-Range",
    options: [],
    id: "onchain-users-last-6-months",
  },
  {
    label: "Total Transactions",
    renderText: "total transactions are",
    description: "Total number of transactions on the platform",
    type: "Range",
    options: [],
    id: "total-txns",
  },
  {
    label: "Total Txn Fees (ETH)",
    renderText: "total transaction fees in ETH are",
    description: "Total transaction fees collected in ETH on the platform",
    type: "Range",
    options: [],
    id: "total-txn-fees-eth",
  },
  {
    label: "Txn Fees Last 6 Months (ETH)",
    renderText: "transaction fees in ETH in the last 6 months are",
    description: "Transaction fees collected in ETH on the platform in the last 6 months",
    type: "Range",
    options: [],
    id: "txn-fees-last-6-months-eth",
  },
  {
    label: "Number of NPM Packages",
    renderText: "number of NPM packages is",
    description: "Total number of NPM packages associated with the project",
    type: "Range",
    options: [],
    id: "npm-packages",
  },
  {
    label: "Date First NPM Package Download",
    renderText: "date of first npm download is",
    description: "Date when the project was first downloaded from NPM",
    type: "Date-Range",
    options: [],
    id: "date-first-download",
  },
  {
    label: "Total NPM Package Downloads",
    renderText: "total npm downloads are",
    description: "Total number of downloads for the project",
    type: "Range",
    options: [],
    id: "total-downloads",
  },
  {
    label: "Downloads Last 6 Months",
    renderText: "downloads in the last 6 months are",
    description: "Number of NPM downloads for the project in the last 6 months",
    type: "Range",
    options: [],
    id: "downloads-last-6-months",
  },
  {
    label: "Has Token",
    renderText: "has token",
    description: "Indicates whether the project has a token",
    type: "Checkbox",
    options: [],
    id: "has-token",
  },
  {
    label: "GitHub Repos",
    renderText: "number of GitHub repos is",
    description: "Total number of GitHub repositories associated with the project",
    type: "Range",
    options: [],
    id: "github-repos",
  },
  {
    label: "Date First Commit",
    renderText: "date of first commit is",
    description: "Date when the project had its first commit on GitHub",
    type: "Date-Range",
    options: [],
    id: "date-first-commit",
  },
  {
    label: "Total Stars",
    renderText: "total stars are",
    description: "Total number of stars received by the project on GitHub",
    type: "Range",
    options: [],
    id: "total-stars",
  },
  {
    label: "Total Forks",
    renderText: "total forks are",
    description: "Total number of forks created from the project on GitHub",
    type: "Range",
    options: [],
    id: "total-forks",
  },
  {
    label: "Total Contributors",
    renderText: "total contributors are",
    description: "Total number of contributors who have contributed to the project on GitHub",
    type: "Range",
    options: [],
    id: "total-contributors",
  },
  {
    label: "Contributors Last 6 Months",
    renderText: "contributors in the last 6 months are",
    description: "Number of contributors who have contributed to the project on GitHub in the last 6 months",
    type: "Date-Range",
    options: [],
    id: "contributors-last-6-months",
  },
  {
    label: "Avg Monthly Active Developers Last 6 Months",
    renderText: "average monthly active developers in the last 6 months are",
    description: "Average number of monthly active developers who have contributed to the project on GitHub in the last 6 months",
    type: "Range",
    options: [],
    id: "avg-monthly-active-devs-last-6-months",
  }
];
