export const casesTableConfigurator = [
  {
    name: "itemid",
    label: "Id",
    fixed: true,
    width: 100,
    disabled: true,
  },
  {
    name: "docname",
    label: "Doc name",
    fixed: false,
    width: 180,
  },
  {
    name: "doctypebranch",
    label: "Doc type branch",
    fixed: false,
    width: 125,
  },
  {
    name: "ecli",
    label: "ECLI",
    fixed: false,
    width: 180,
  },
  {
    name: "importance",
    label: "Importance",
    fixed: false,
    width: 100,
  },
  {
    name: "applicability",
    label: "Applicability",
    fixed: false,
    width: 105,
  },
  {
    name: "appno",
    label: "App №",
    fixed: false,
    width: 160,
  },
  {
    name: "decisiondate",
    label: "Decision date",
    fixed: false,
    width: 105,
  },
  {
    name: "introductiondate",
    label: "Introduction date",
    fixed: false,
    width: 100,
  },
  {
    name: "judgementdate",
    label: "Judgement date",
    fixed: false,
    width: 180,
  },
  {
    name: "kpdate",
    label: "Kp date",
    fixed: false,
    width: 180,
  },
  {
    name: "languageisocode",
    label: "Language",
    fixed: false,
    width: 100,
  },
  {
    name: "originatingbody_name",
    label: "Originating body name",
    fixed: false,
    width: 120,
  },
  {
    name: "originatingbody_type",
    label: "Originating body type",
    fixed: false,
    width: 100,
  },
  {
    name: "rank",
    label: "Rank",
    fixed: false,
    width: 100,
  },
  {
    name: "respondent",
    label: "Respondent",
    fixed: false,
    width: 100,
  },
  {
    name: "separateopinion",
    label: "Separate opinion",
    fixed: false,
    width: 100,
  },
  {
    name: "typedescription",
    label: "Type description",
    fixed: false,
    width: 100,
  },
  // {
  //   name: 'judgment',
  //   label: 'Judgment',
  //   fixed: false,
  //   width: 180,
  //   hidden: true
  // },
  {
    name: "parties",
    label: "Parties",
    fixed: false,
    width: 180,
  },
];

export const optionsCasesListSelect = casesTableConfigurator.map(
  ({ name, label, disabled }) => ({ value: name, label, disabled }),
);

export const tableDefaultConfigurator = [
  "itemid",
  "docname",
  "doctypebranch",
  "importance",
  "rank",
  "judgementdate",
  "languageisocode",
  "parties",
  "respondent",
  "separateopinion",
];
