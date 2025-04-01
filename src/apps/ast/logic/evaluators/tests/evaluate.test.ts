import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { EXPRESSION_TYPES } from '@ast/logic/constants';
import { evaluate } from '@ast/logic/evaluators/evaluate';
import * as evaluateFunctionModule from '@ast/logic/evaluators/evaluateFunction';
import * as evaluateLiteralModule from '@ast/logic/evaluators/evaluateLiteral';
import { Expression } from '@ast/logic/types';

describe('evaluate', () => {
  beforeEach(() => {
    // Mock the evaluator functions
    vi.spyOn(evaluateFunctionModule, 'evaluateFunction').mockImplementation(vi.fn());
    vi.spyOn(evaluateLiteralModule, 'evaluateLiteral').mockImplementation(vi.fn());
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should call evaluateFunction when expression type is function', async () => {
    const functionExpression: Expression = {
      type: EXPRESSION_TYPES.function,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      name: 'testFunction',
      args: [],
    };

    const expectedResult = { value: 'function result' };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    evaluateFunctionModule.evaluateFunction.mockResolvedValueOnce(expectedResult);

    const result = await evaluate(functionExpression);

    expect(evaluateFunctionModule.evaluateFunction).toHaveBeenCalledWith(functionExpression);
    expect(evaluateLiteralModule.evaluateLiteral).not.toHaveBeenCalled();
    expect(result).toEqual(expectedResult);
  });

  it('should call evaluateLiteral when expression type is not function', async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const literalExpression: Expression = {
      type: EXPRESSION_TYPES.literal,
      value: 'test value',
    };

    const expectedResult = { value: 'literal result' };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    evaluateLiteralModule.evaluateLiteral.mockResolvedValueOnce(expectedResult);

    const result = await evaluate(literalExpression);

    expect(evaluateLiteralModule.evaluateLiteral).toHaveBeenCalledWith(literalExpression);
    expect(evaluateFunctionModule.evaluateFunction).not.toHaveBeenCalled();
    expect(result).toEqual(expectedResult);
  });

  it('should handle different literal expression types', async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const numberExpression: Expression = {
      type: EXPRESSION_TYPES.literal,
      value: 42,
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const stringExpression: Expression = {
      type: EXPRESSION_TYPES.literal,
      value: 'hello',
    };

    const expectedNumberResult = { value: 42 };
    const expectedStringResult = { value: 'hello' };

    evaluateLiteralModule.evaluateLiteral
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      .mockResolvedValueOnce(expectedNumberResult)
      .mockResolvedValueOnce(expectedStringResult);

    const numberResult = await evaluate(numberExpression);
    const stringResult = await evaluate(stringExpression);

    expect(evaluateLiteralModule.evaluateLiteral).toHaveBeenCalledWith(numberExpression);
    expect(evaluateLiteralModule.evaluateLiteral).toHaveBeenCalledWith(stringExpression);
    expect(numberResult).toEqual(expectedNumberResult);
    expect(stringResult).toEqual(expectedStringResult);
  });

  it('should handle complex function expressions with nested arguments', async () => {
    const complexExpression: Expression = {
      type: EXPRESSION_TYPES.function,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      name: 'function',
      args: [
        { type: EXPRESSION_TYPES.literal, value: 'arg1' },
        {
          type: EXPRESSION_TYPES.function,
          name: 'nestedFunction',
          args: [],
        },
      ],
    };

    const expectedResult = { value: 'complex result' };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    evaluateFunctionModule.evaluateFunction.mockResolvedValueOnce(expectedResult);

    const result = await evaluate(complexExpression);

    expect(evaluateFunctionModule.evaluateFunction).toHaveBeenCalledWith(complexExpression);
    expect(result).toEqual(expectedResult);
  });

  it('should propagate errors from the evaluators', async () => {
    const functionExpression: Expression = {
      type: EXPRESSION_TYPES.function,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      name: 'errorFunction',
      args: [],
    };

    const testError = new Error('Evaluation error');
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    evaluateFunctionModule.evaluateFunction.mockRejectedValueOnce(testError);

    await expect(evaluate(functionExpression)).rejects.toThrow('Evaluation error');
  });
});
