import { EXPRESSION_NAMES, EXPRESSION_TYPES } from '@/apps/ast/constants';
import { add, equals, not } from '@/apps/ast/logic/astFunctions/astFunctions';
import { evaluateType } from '@/apps/ast/logic/evaluators/evaluateType';
import { Expression } from '@/apps/ast/types';

export const evaluate = (expression: Expression) => {
  // if (expression.type == EXPRESSION_TYPES.literal) {
  //   return expression.value;
  // }

  evaluateType(expression);

  if (expression.name == EXPRESSION_NAMES.add) {
    const param1 = evaluate(expression.parameters[0]);
    const param2 = evaluate(expression.parameters[1]);
    return add(param1, param2);
  }

  if (expression.name == EXPRESSION_NAMES.equals) {
    const param1 = evaluate(expression.parameters[0]);
    const param2 = evaluate(expression.parameters[1]);
    return equals(param1, param2);
  }

  if (expression.name == EXPRESSION_NAMES.not) {
    return not(expression.parameters[0]);
  }

  throw 'Unknown function';
};
