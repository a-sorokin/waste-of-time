import { EXPRESSION_TYPES } from '@/apps/ast/logic/constants';
import { Expression } from '@/apps/ast/logic/types';

const evaluateLiteralActions = {
  [EXPRESSION_TYPES.literal]: (expression: Expression) => expression.value,
  [EXPRESSION_TYPES.function]: () => {
    throw new Error(`Can't evaluate function`);
  },
};

export const evaluateLiteral = (expression: Expression) => {
  const action = evaluateLiteralActions[expression.type];
  if (!action) throw new Error('Unknown type');
  return action(expression);
};
