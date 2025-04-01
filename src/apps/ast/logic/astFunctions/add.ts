import { ExpressionValue } from '@ast/logic/types';
import { setResult } from '@ast/utils';

export const add = (value1: ExpressionValue, value2: ExpressionValue) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    setResult('Can only add numbers');
    throw new Error('Can only add numbers');
  }

  return value1 + value2;
};
