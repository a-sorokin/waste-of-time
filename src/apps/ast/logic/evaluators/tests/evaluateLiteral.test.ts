import { describe, expect, it, vi } from 'vitest';
import { EVALUATION_ERROR, TYPE_ERROR } from '@ast/constants/constants';
import { EXPRESSION_TYPES } from '@ast/logic/constants';
import { evaluateLiteral } from '@ast/logic/evaluators/evaluateLiteral';
import { setResult } from '@ast/utils/setResult';

vi.mock('@ast/utils/setResult');

describe('evaluateLiteral', () => {
  it('should return the value of a literal expression', () => {
    const expression = { type: EXPRESSION_TYPES.literal, value: 42 };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    expect(evaluateLiteral(expression)).toBe(42);
  });

  it('should throw an error and call setResult for function expressions', () => {
    const expression = { type: EXPRESSION_TYPES.function };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    expect(() => evaluateLiteral(expression)).toThrow(EVALUATION_ERROR);
    expect(setResult).toHaveBeenCalledWith(EVALUATION_ERROR);
  });

  it('should throw an error and call setResult for unknown expression types', () => {
    const expression = { type: 'unknown_type' };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    expect(() => evaluateLiteral(expression)).toThrow(TYPE_ERROR);
    expect(setResult).toHaveBeenCalledWith(TYPE_ERROR);
  });
});
