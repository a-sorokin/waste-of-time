import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { useAstStore } from '@ast/astStore';
import { evaluate } from '@ast/logic/evaluators/evaluate';
import { evaluateAndSetResult } from '@ast/utils/evaluateAndSetResult';
import { setResult } from '@ast/utils/setResult';

vi.mock('@ast/astStore', () => ({
  useAstStore: {
    getState: vi.fn(() => ({
      setResult: vi.fn(),
    })),
  },
}));

vi.mock('@ast/logic/evaluators/evaluate', () => ({
  evaluate: vi.fn(),
}));

vi.mock('@ast/utils/setResult', () => ({
  setResult: vi.fn(),
}));

describe('evaluateAndSetResult', () => {
  const mockSetResult = vi.fn();

  beforeEach(() => {
    vi.resetAllMocks();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    vi.mocked(useAstStore.getState).mockReturnValue({ setResult: mockSetResult });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should evaluate an expression and set the result in the store', async () => {
    // Arrange
    const mockExpression = JSON.stringify({ type: 'number', value: 42 });
    const mockResult = { result: 42 };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    vi.mocked(evaluate).mockResolvedValue(mockResult);

    // Act
    await evaluateAndSetResult(mockExpression);

    // Assert
    expect(evaluate).toHaveBeenCalledWith({ type: 'number', value: 42 });
    expect(mockSetResult).toHaveBeenCalledWith(JSON.stringify(mockResult));
    expect(setResult).not.toHaveBeenCalled();
  });

  it('should handle JSON parse errors', async () => {
    // Arrange
    const invalidExpression = '{invalid: json}';

    // Act
    await evaluateAndSetResult(invalidExpression);

    // Assert
    expect(evaluate).not.toHaveBeenCalled();
    expect(mockSetResult).not.toHaveBeenCalled();
    expect(setResult).toHaveBeenCalled();
    // We can't predict the exact error message as it depends on the JSON parser,
    // but we can check that setResult was called with some string
    expect(vi.mocked(setResult).mock.calls[0][0]).toBeTypeOf('string');
  });

  it('should handle evaluation errors', async () => {
    // Arrange
    const validExpression = JSON.stringify({ type: 'operation', value: 'divide', args: [10, 0] });
    const mockError = new Error('Division by zero');

    // Mock evaluate to throw an error
    vi.mocked(evaluate).mockRejectedValue(mockError);

    // Act
    await evaluateAndSetResult(validExpression);

    // Assert
    expect(evaluate).toHaveBeenCalledWith({
      type: 'operation',
      value: 'divide',
      args: [10, 0],
    });
    expect(mockSetResult).not.toHaveBeenCalled();
    expect(setResult).toHaveBeenCalledWith('Division by zero');
  });

  it('should handle complex expressions correctly', async () => {
    // Arrange
    const complexExpression = JSON.stringify({
      type: 'operation',
      value: 'add',
      args: [
        { type: 'number', value: 5 },
        { type: 'number', value: 10 },
      ],
    });
    const mockResult = { result: 15 };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    vi.mocked(evaluate).mockResolvedValue(mockResult);

    // Act
    await evaluateAndSetResult(complexExpression);

    // Assert
    expect(evaluate).toHaveBeenCalledWith({
      type: 'operation',
      value: 'add',
      args: [
        { type: 'number', value: 5 },
        { type: 'number', value: 10 },
      ],
    });
    expect(mockSetResult).toHaveBeenCalledWith(JSON.stringify(mockResult));
  });
});
