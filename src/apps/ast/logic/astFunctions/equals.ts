import { ExpressionValue } from '@ast/logic/types';

export const equals = (value1: ExpressionValue, value2: ExpressionValue) => {
  // for arrays make sense to compare like this JSON.stringify(value1) === JSON.stringify(value2)
  return value1 === value2;
};
