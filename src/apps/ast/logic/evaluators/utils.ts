import { evaluate } from '@ast/logic/evaluators/evaluate';
import { Expression } from '@ast/logic/types';

export const parseParameters = (expression: Expression) => {
  const param1 = evaluate(expression.parameters[0]);
  const param2 = evaluate(expression.parameters[1]);
  return [param1, param2];
};
