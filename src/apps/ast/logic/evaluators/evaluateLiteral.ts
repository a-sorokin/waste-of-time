import { EXPRESSION_TYPES } from '@ast/logic/constants';
import { Expression } from '@ast/logic/types';
import { setResult } from '@ast/utils';

const evaluateLiteralActions = {
  [EXPRESSION_TYPES.literal]: (expression: Expression) => expression.value,
  [EXPRESSION_TYPES.function]: () => {
    setResult(`Can't evaluate function`);
    throw new Error(`Can't evaluate function`);
  },
};

export const evaluateLiteral = (expression: Expression) => {
  const action = evaluateLiteralActions[expression.type];
  if (!action) {
    setResult('Unknown type');
    throw new Error('Unknown type');
  }
  return action(expression);
};
