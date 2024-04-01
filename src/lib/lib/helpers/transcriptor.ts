export const operatorTranscription = (value:string) => {
  if (value.includes("==")) return "equal to";
  if (value.includes("!=")) return "not equal to";
  if (value.includes(">=")) return "greater or equal to";
  if (value.includes("<=")) return "less or equal to";
  if (value.includes(">")) return "greater than";
  if (value.includes("<")) return "less than";
  return ""
};
