import { evaluate } from '@/apps/ast/logic/evaluators/evaluate';
import { Expression } from '@/apps/ast/types';

export const parseParameters = (expression: Expression) => {
  const param1 = evaluate(expression.parameters[0]);
  const param2 = evaluate(expression.parameters[1]);
  return [param1, param2];
};
