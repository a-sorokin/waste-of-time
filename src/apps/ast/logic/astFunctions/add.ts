import { ExpressionValue } from '@ast/logic/types';

export const add = (value1: ExpressionValue, value2: ExpressionValue) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    throw new Error('Can only add numbers');
  }

  return value1 + value2;
};
