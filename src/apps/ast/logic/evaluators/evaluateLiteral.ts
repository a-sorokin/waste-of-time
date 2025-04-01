import { EVALUATION_ERROR, TYPE_ERROR } from '@ast/constants';
import { EXPRESSION_TYPES } from '@ast/logic/constants';
import { Expression } from '@ast/logic/types';
import { setResult } from '@ast/utils';

const evaluateLiteralActions = {
  [EXPRESSION_TYPES.literal]: (expression: Expression) => expression.value,
  [EXPRESSION_TYPES.function]: () => {
    setResult(EVALUATION_ERROR);
    throw new Error(EVALUATION_ERROR);
  },
};

export const evaluateLiteral = (expression: Expression) => {
  const action = evaluateLiteralActions[expression.type];
  if (!action) {
    setResult(TYPE_ERROR);
    throw new Error(TYPE_ERROR);
  }
  return action(expression);
};
