import { beforeEach, describe, expect, it, vi } from 'vitest';
import { useAstStore } from '@ast/astStore';
import { setResult } from '@ast/utils/setResult';

// Mock the zustand store
vi.mock('@ast/astStore', () => ({
  useAstStore: {
    getState: vi.fn(),
  },
}));

describe('setResult', () => {
  // Create a mock state object with the setResult method
  const mockSetResult = vi.fn();
  const mockState = {
    setResult: mockSetResult,
    // Add other state properties if needed for your tests
  };

  beforeEach(() => {
    // Clear mock calls between tests
    vi.clearAllMocks();

    // Set up the mock implementation for getState
    (useAstStore.getState as any).mockReturnValue(mockState);
  });

  it('should call state.setResult with the provided result string', () => {
    // Arrange
    const testResult = 'test result string';

    // Act
    setResult(testResult);

    // Assert
    expect(useAstStore.getState).toHaveBeenCalledTimes(1);
    expect(mockSetResult).toHaveBeenCalledTimes(1);
    expect(mockSetResult).toHaveBeenCalledWith(testResult);
  });

  it('should work with an empty string', () => {
    // Arrange
    const testResult = '';

    // Act
    setResult(testResult);

    // Assert
    expect(mockSetResult).toHaveBeenCalledWith(testResult);
  });

  it('should pass through special characters correctly', () => {
    // Arrange
    const testResult = '!@#$%^&*()_+';

    // Act
    setResult(testResult);

    // Assert
    expect(mockSetResult).toHaveBeenCalledWith(testResult);
  });
});
