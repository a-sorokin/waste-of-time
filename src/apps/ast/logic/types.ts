import { EXPRESSION_NAMES, EXPRESSION_TYPES } from '@ast/logic/constants';

export type ExpressionBaseValue = string | boolean | number | Date | null;

export type ExpressionValue = ExpressionBaseValue | ExpressionBaseValue[];

export type Expression = {
  name: EXPRESSION_NAMES;
  parameters: Expression[];
  type: EXPRESSION_TYPES;
  value: ExpressionValue;
};
