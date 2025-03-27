import { add } from '@ast/logic/astFunctions/add';
import { equals } from '@ast/logic/astFunctions/equals';
import { not } from '@ast/logic/astFunctions/not';
import { EXPRESSION_NAMES } from '@ast/logic/constants';
import { parseParameters } from '@ast/logic/evaluators/utils';
import { Expression } from '@ast/logic/types';

const evaluateFunctionActions = {
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

export const evaluateFunction = (expression: Expression) => {
  const action = evaluateFunctionActions[expression.name];
  if (!action) throw new Error('Unknown name');
  return action(expression);
};
