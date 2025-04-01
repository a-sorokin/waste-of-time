import { useAstStore } from '@ast/astStore';
import { evaluate } from '@ast/logic/evaluators/evaluate';
import { Expression } from '@ast/logic/types';
import { setResult } from '@ast/utils/setResult';

export const evaluateAndSetResult = async (expression: string) => {
  try {
    const parsedExpression: Expression = JSON.parse(expression);
    const localResult = await evaluate(parsedExpression);
    const resultString = JSON.stringify(localResult);
    useAstStore.getState().setResult(resultString);
  } catch (e) {
    setResult((e as Error).message);
  }
};
