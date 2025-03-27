import { EXPRESSION_TYPES } from '@/apps/ast/constants';
import { evaluateByName } from '@/apps/ast/logic/evaluators/evaluateByName';
import { evaluateByType } from '@/apps/ast/logic/evaluators/evaluateByType';
import { Expression, ExpressionValue } from '@/apps/ast/types';

export const evaluate = (expression: Expression): ExpressionValue => {
  if (expression.type === EXPRESSION_TYPES.function) {
    return evaluateByName(expression);
  }
  return evaluateByType(expression);
};
