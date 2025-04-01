import { add } from '@ast/logic/astFunctions/add';
import { contains } from '@ast/logic/astFunctions/contains';
import { equals } from '@ast/logic/astFunctions/equals';
import { fetchGet } from '@ast/logic/astFunctions/fetchGet';
import { not } from '@ast/logic/astFunctions/not';
import { EXPRESSION_NAMES } from '@ast/logic/constants';
import { parseOneParameter, parseTwoParameters } from '@ast/logic/evaluators/utils';
import { Expression } from '@ast/logic/types';
import { setResult } from '@ast/utils';

const evaluateFunctionActions = {
  [EXPRESSION_NAMES.add]: (expression: Expression) => {
    const [p1, p2] = parseTwoParameters(expression);
    return add(p1, p2);
  },
  [EXPRESSION_NAMES.equals]: (expression: Expression) => {
    const [p1, p2] = parseTwoParameters(expression);
    return equals(p1, p2);
  },
  [EXPRESSION_NAMES.not]: (expression: Expression) => {
    return not(parseOneParameter(expression));
  },
  [EXPRESSION_NAMES.contains]: async (expression: Expression) => {
    const [p1, p2] = parseTwoParameters(expression);
    return contains(p1, p2);
  },
  [EXPRESSION_NAMES.fetchGet]: (expression: Expression) => {
    return fetchGet(parseOneParameter(expression));
  },
};

export const evaluateFunction = (expression: Expression) => {
  const action = evaluateFunctionActions[expression.name];
  if (!action) {
    setResult('Unknown name');
    throw new Error('Unknown name');
  }
  return action(expression);
};
