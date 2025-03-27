import { EXPRESSION_NAMES } from '@/apps/ast/constants';
import { add } from '@/apps/ast/logic/astFunctions/add';
import { equals } from '@/apps/ast/logic/astFunctions/equals';
import { not } from '@/apps/ast/logic/astFunctions/not';
import { parseParameters } from '@/apps/ast/logic/evaluators/utils';
import { Expression } from '@/apps/ast/types';

const evaluateNameActions = {
  [EXPRESSION_NAMES.add]: (expression: Expression) => {
    const [p1, p2] = parseParameters(expression);
    return add(p1, p2);
  },
  [EXPRESSION_NAMES.equals]: (expression: Expression) => {
    const [p1, p2] = parseParameters(expression);
    return equals(p1, p2);
  },
  [EXPRESSION_NAMES.not]: (expression: Expression) => {
    return not(expression.parameters[0]);
  },
};

export const evaluateByName = (expression: Expression) => {
  const action = evaluateNameActions[expression.name];
  if (!action) throw new Error('Unknown name');
  return action(expression);
};
