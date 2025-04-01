import { evaluate } from '@ast/logic/evaluators/evaluate';
import { Expression } from '@ast/logic/types';

export const parseOneParameter = async (expression: Expression) => {
  return evaluate(expression.parameters[0]);
};

export const parseTwoParameters = async (expression: Expression) => {
  const param1 = await evaluate(expression.parameters[0]);
  const param2 = await evaluate(expression.parameters[1]);
  return [param1, param2];
};
