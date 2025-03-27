import { EXPRESSION_TYPES } from '@/apps/ast/constants';
import { Expression } from '@/apps/ast/types';

const evaluateTypeActions = {
  [EXPRESSION_TYPES.literal]: (expression: Expression) => expression.value,
  [EXPRESSION_TYPES.function]: () => {
    throw `Can't evaluate function`;
  },
};

export const evaluateByType = (expression: Expression) => {
  const action = evaluateTypeActions[expression.type];
  if (!action) throw new Error('Unknown type');
  return action(expression);
};
