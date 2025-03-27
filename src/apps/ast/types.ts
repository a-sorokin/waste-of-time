import { EXPRESSION_NAMES, EXPRESSION_TYPES } from '@/apps/ast/constants';

export type ExpressionValue = string | boolean | number;

export type Expression = {
  name: EXPRESSION_NAMES;
  parameters: Expression[];
  type: EXPRESSION_TYPES;
  value: ExpressionValue;
};
