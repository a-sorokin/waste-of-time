import { ExpressionValue } from '@/apps/ast/logic/types';

export const not = (value: ExpressionValue) => {
  return !value;
};
