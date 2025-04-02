import { describe, expect, it, vi } from 'vitest';
import { NAME_ERROR } from '@ast/constants/constants';
import { EXPRESSION_NAMES } from '@ast/logic/constants';
import { evaluateFunction } from '@ast/logic/evaluators/evaluateFunction';
import { Expression } from '@ast/logic/types';

vi.mock('@ast/logic/astFunctions/add', () => ({
  add: vi.fn().mockResolvedValue(5),
}));

vi.mock('@ast/logic/astFunctions/equals', () => ({
  equals: vi.fn().mockResolvedValue(true),
}));

vi.mock('@ast/logic/astFunctions/not', () => ({
  not: vi.fn().mockResolvedValue(false),
}));

vi.mock('@ast/logic/astFunctions/contains', () => ({
  contains: vi.fn().mockResolvedValue(true),
}));

vi.mock('@ast/logic/astFunctions/fetchGet', () => ({
  fetchGet: vi.fn().mockResolvedValue({ data: 'response' }),
}));

vi.mock('@ast/logic/evaluators/utils', () => ({
  parseOneParameter: vi.fn().mockResolvedValue('parsed'),
  parseTwoParameters: vi.fn().mockResolvedValue(['parsed1', 'parsed2']),
}));

vi.mock('@ast/utils/setResult', () => ({
  setResult: vi.fn(),
}));
describe('evaluateFunction', () => {
  const mockExpression = (name: string): Expression => ({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    name,
    parameters: [],
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    type: 'function',
  });

  it('should call add function for EXPRESSION_NAMES.add', async () => {
    const expression = mockExpression(EXPRESSION_NAMES.add);
    const result = await evaluateFunction(expression);

    const { parseTwoParameters } = await import('@ast/logic/evaluators/utils');
    const { add } = await import('@ast/logic/astFunctions/add');

    expect(parseTwoParameters).toHaveBeenCalledWith(expression);
    expect(add).toHaveBeenCalledWith('parsed1', 'parsed2');
    expect(result).toBe(5);
  });

  it('should call equals function for EXPRESSION_NAMES.equals', async () => {
    const expression = mockExpression(EXPRESSION_NAMES.equals);
    const result = await evaluateFunction(expression);

    const { parseTwoParameters } = await import('@ast/logic/evaluators/utils');
    const { equals } = await import('@ast/logic/astFunctions/equals');

    expect(parseTwoParameters).toHaveBeenCalledWith(expression);
    expect(equals).toHaveBeenCalledWith('parsed1', 'parsed2');
    expect(result).toBe(true);
  });

  it('should call not function for EXPRESSION_NAMES.not', async () => {
    const expression = mockExpression(EXPRESSION_NAMES.not);
    const result = await evaluateFunction(expression);

    const { parseOneParameter } = await import('@ast/logic/evaluators/utils');
    const { not } = await import('@ast/logic/astFunctions/not');

    expect(parseOneParameter).toHaveBeenCalledWith(expression);
    expect(not).toHaveBeenCalledWith('parsed');
    expect(result).toBe(false);
  });

  it('should call contains function for EXPRESSION_NAMES.contains', async () => {
    const expression = mockExpression(EXPRESSION_NAMES.contains);
    const result = await evaluateFunction(expression);

    const { parseTwoParameters } = await import('@ast/logic/evaluators/utils');
    const { contains } = await import('@ast/logic/astFunctions/contains');

    expect(parseTwoParameters).toHaveBeenCalledWith(expression);
    expect(contains).toHaveBeenCalledWith('parsed1', 'parsed2');
    expect(result).toBe(true);
  });

  it('should call fetchGet function for EXPRESSION_NAMES.fetchGet', async () => {
    const expression = mockExpression(EXPRESSION_NAMES.fetchGet);
    const result = await evaluateFunction(expression);

    const { parseOneParameter } = await import('@ast/logic/evaluators/utils');
    const { fetchGet } = await import('@ast/logic/astFunctions/fetchGet');

    expect(parseOneParameter).toHaveBeenCalledWith(expression);
    expect(fetchGet).toHaveBeenCalledWith('parsed');
    expect(result).toEqual({ data: 'response' });
  });

  it('should throw error and set result for unknown function name', async () => {
    const expression = mockExpression('unknown_function');

    await expect(evaluateFunction(expression)).rejects.toThrow(NAME_ERROR);

    const { setResult } = await import('@ast/utils/setResult');
    expect(setResult).toHaveBeenCalledWith(NAME_ERROR);
  });

  it('should propagate errors from action functions', async () => {
    const expression = mockExpression(EXPRESSION_NAMES.add);
    const error = new Error('Test error');

    const { add } = await import('@ast/logic/astFunctions/add');
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    add.mockRejectedValueOnce(error);

    await expect(evaluateFunction(expression)).rejects.toThrow(error);
  });
});
