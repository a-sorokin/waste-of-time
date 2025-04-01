import { add } from '@ast/logic/astFunctions/add';
import { contains } from '@ast/logic/astFunctions/contains';
import { equals } from '@ast/logic/astFunctions/equals';
import { fetchGet } from '@ast/logic/astFunctions/fetchGet';
import { not } from '@ast/logic/astFunctions/not';
import { EXPRESSION_NAMES } from '@ast/logic/constants';
import { parseOneParameter, parseTwoParameters } from '@ast/logic/evaluators/utils';
import { Expression, ExpressionValue } from '@ast/logic/types';
import { setResult } from '@ast/utils';

const evaluateFunctionActions = {
  [EXPRESSION_NAMES.add]: async (expression: Expression): Promise<ExpressionValue> => {
    const [p1, p2] = await parseTwoParameters(expression);
    return add(p1, p2);
  },
  [EXPRESSION_NAMES.equals]: async (expression: Expression): Promise<ExpressionValue> => {
    const [p1, p2] = await parseTwoParameters(expression);
    return equals(p1, p2);
  },
  [EXPRESSION_NAMES.not]: async (expression: Expression): Promise<ExpressionValue> => {
    const p = await parseOneParameter(expression);
    return not(p);
  },
  [EXPRESSION_NAMES.contains]: async (expression: Expression): Promise<ExpressionValue> => {
    const [p1, p2] = await parseTwoParameters(expression);
    return contains(p1, p2);
  },
  [EXPRESSION_NAMES.fetchGet]: async (expression: Expression): Promise<ExpressionValue> => {
    const p = await parseOneParameter(expression);
    return fetchGet(p);
  },
};

export const evaluateFunction = async (expression: Expression): Promise<ExpressionValue> => {
  const action = evaluateFunctionActions[expression.name];
  if (!action) {
    setResult('Unknown name');
    throw new Error('Unknown name');
  }
  return action(expression);
};
