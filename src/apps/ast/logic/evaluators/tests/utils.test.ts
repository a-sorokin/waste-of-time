import { describe, expect, it, vi } from 'vitest';
import { evaluate } from '@ast/logic/evaluators/evaluate';
import { parseOneParameter, parseTwoParameters } from '@ast/logic/evaluators/utils';

vi.mock('@ast/logic/evaluators/evaluate');

describe('parseOneParameter', () => {
  it('should evaluate and return the first parameter', async () => {
    const mockExpression = { parameters: [{ value: 42 }] };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    evaluate.mockResolvedValue(42);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const result = await parseOneParameter(mockExpression);
    expect(result).toBe(42);
    expect(evaluate).toHaveBeenCalledWith(mockExpression.parameters[0]);
  });
});

describe('parseTwoParameters', () => {
  it('should evaluate and return both parameters as an array', async () => {
    const mockExpression = { parameters: [{ value: 1 }, { value: 2 }] };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    evaluate.mockResolvedValueOnce(1).mockResolvedValueOnce(2);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const result = await parseTwoParameters(mockExpression);
    expect(result).toEqual([1, 2]);
    expect(evaluate).toHaveBeenCalledTimes(2);
    expect(evaluate).toHaveBeenCalledWith(mockExpression.parameters[0]);
    expect(evaluate).toHaveBeenCalledWith(mockExpression.parameters[1]);
  });

  it('should throw an error if parameters are missing', async () => {
    const mockExpression = { parameters: [{}] };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    evaluate.mockResolvedValue(undefined);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    await expect(parseTwoParameters(mockExpression)).rejects.toThrow();
  });
});
