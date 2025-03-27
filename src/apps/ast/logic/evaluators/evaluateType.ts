import { EXPRESSION_TYPES } from '@/apps/ast/constants';
import { Expression } from '@/apps/ast/types';

const evaluateTypeActions = {
  [EXPRESSION_TYPES.literal]: (expression: Expression) => expression.value,
  [EXPRESSION_TYPES.function]: (expression: Expression) => {
    return true;
  },
};

export const evaluateType = (expression: Expression) => {
  const action = evaluateTypeActions[expression.type];
  if (!action) throw 'Unknown type';
  return action(expression);
};
