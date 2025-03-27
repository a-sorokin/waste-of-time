import { ExpressionValue } from '@/apps/ast/types';

export const not = (arg: ExpressionValue) => {
  return !arg;
};
