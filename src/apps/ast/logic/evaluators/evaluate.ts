import { EXPRESSION_TYPES } from '@/apps/ast/logic/constants';
import { evaluateFunction } from '@/apps/ast/logic/evaluators/evaluateFunction';
import { evaluateLiteral } from '@/apps/ast/logic/evaluators/evaluateLiteral';
import { Expression, ExpressionValue } from '@/apps/ast/logic/types';

export const evaluate = (expression: Expression): ExpressionValue => {
  if (expression.type === EXPRESSION_TYPES.function) {
    return evaluateFunction(expression);
  }
  return evaluateLiteral(expression);
};
