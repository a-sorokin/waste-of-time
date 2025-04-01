import { NUM_ERROR } from '@ast/constants';
import { ExpressionValue } from '@ast/logic/types';
import { setResult } from '@ast/utils';

export const add = (value1: ExpressionValue, value2: ExpressionValue) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    setResult(NUM_ERROR);
    throw new Error(NUM_ERROR);
  }

  return value1 + value2;
};
