import { evaluate } from "mathjs";

export const parseFormula = (formula) => {
  try {
    return evaluate(formula);
  } catch {
    return "ERROR";
  }
};
