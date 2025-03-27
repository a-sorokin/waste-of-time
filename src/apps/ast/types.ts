import { EXPRESSION_NAMES, EXPRESSION_TYPES } from '@/apps/ast/constants';

export type ExpressionBasicValue = string | boolean | number | Date | null;

export type ExpressionValue = ExpressionBasicValue | ExpressionBasicValue[];

export type Expression = {
  name: EXPRESSION_NAMES;
  parameters: Expression[];
  type: EXPRESSION_TYPES;
  value: ExpressionValue;
};
