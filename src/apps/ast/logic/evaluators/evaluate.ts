import { EXPRESSION_TYPES } from '@ast/logic/constants';
import { evaluateFunction } from '@ast/logic/evaluators/evaluateFunction';
import { evaluateLiteral } from '@ast/logic/evaluators/evaluateLiteral';
import { Expression, ExpressionValue } from '@ast/logic/types';

export const evaluate = async (expression: Expression): Promise<ExpressionValue> => {
  if (expression.type === EXPRESSION_TYPES.function) {
    return evaluateFunction(expression);
  }
  return evaluateLiteral(expression);
};
