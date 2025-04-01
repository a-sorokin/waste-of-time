import { describe, it, expect, vi } from 'vitest';
import {  EVALUATION_ERROR, TYPE_ERROR } from '@ast/constants/constants';
import { Expression } from '@ast/logic/types';
import { EXPRESSION_TYPES } from '@ast/logic/constants';
import { evaluateLiteral } from '@ast/logic/evaluators/evaluateLiteral';

// Mock the setResult function
vi.mock('@ast/utils', () => ({
  setResult: vi.fn()
}));

describe('evaluateLiteral', () => {
  const mockLiteralExpression = (value: any): Expression => ({
    type: EXPRESSION_TYPES.literal,
    value,
    name: '',
    parameters: []
  });

  const mockFunctionExpression: Expression = {
    type: EXPRESSION_TYPES.function,
    name: 'testFunc',
    parameters: [],
    value: undefined
  };

  const mockInvalidExpression = {
    type: 'invalid_type',
    value: 'test'
  } as unknown as Expression;


  it('should return the value for literal expressions', () => {
    const testCases = [
      { value: 'test string', expected: 'test string' },
      { value: 42, expected: 42 },
      { value: true, expected: true },
      { value: null, expected: null },
      { value: undefined, expected: undefined },
      { value: { key: 'value' }, expected: { key: 'value' } }
    ];

    testCases.forEach(({ value, expected }) => {
      const expression = mockLiteralExpression(value);
      const result = evaluateLiteral(expression);
      expect(result).toBe(expected);
    });
  });

  it('should throw EVALUATION_ERROR for function expressions', () => {
    expect(() => evaluateLiteral(mockFunctionExpression)).toThrow(EVALUATION_ERROR);

    const { setResult } = await import('@ast/utils/evaluateAndSetResult');
    expect(setResult).toHaveBeenCalledWith(EVALUATION_ERROR);
  });

  it('should throw TYPE_ERROR for unknown expression types', () => {
    expect(() => evaluateLiteral(mockInvalidExpression)).toThrow(TYPE_ERROR);

    const { setResult } = await import('@ast/utils/evaluateAndSetResult');
    expect(setResult).toHaveBeenCalledWith(TYPE_ERROR);
  });

  it('should not call setResult for successful literal evaluations', () => {
    const expression = mockLiteralExpression('test');
    evaluateLiteral(expression);

    const { setResult } = await import('@ast/utils/evaluateAndSetResult');
    expect(setResult).not.toHaveBeenCalled();
  });
});