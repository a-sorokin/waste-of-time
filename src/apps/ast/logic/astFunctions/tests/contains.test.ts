import { beforeEach, describe, expect, it, vi } from 'vitest';
import { CONTAIN_ERROR } from '@ast/constants/constants';
import { contains } from '@ast/logic/astFunctions/contains';
import * as setResultModule from '@ast/utils/setResult';

// Mock the setResult module
vi.mock('@ast/utils/setResult', () => ({
  setResult: vi.fn(),
}));

describe('contains function', () => {
  const { setResult } = setResultModule;

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should return true when value contains search string', () => {
    expect(contains('hello world', 'world')).toBe(true);
    expect(contains('testing', 'test')).toBe(true);
    expect(contains('abc123', '123')).toBe(true);
    expect(setResult).not.toHaveBeenCalled();
  });

  it('should return false when value does not contain search string', () => {
    expect(contains('hello world', 'planet')).toBe(false);
    expect(contains('testing', 'xyz')).toBe(false);
    expect(contains('abc123', '456')).toBe(false);
    expect(setResult).not.toHaveBeenCalled();
  });

  it('should handle empty strings correctly', () => {
    // Every string contains an empty string
    expect(contains('hello', '')).toBe(true);
    // Empty string doesn't contain non-empty strings
    expect(contains('', 'hello')).toBe(false);
    // Empty string contains empty string
    expect(contains('', '')).toBe(true);
  });

  it('should be case sensitive', () => {
    expect(contains('Hello', 'hello')).toBe(false);
    expect(contains('WORLD', 'world')).toBe(false);
  });

  it('should throw an error when first parameter is not a string', () => {
    expect(() => contains(123 as any, 'test')).toThrow(CONTAIN_ERROR);
    expect(() => contains(null as any, 'test')).toThrow(CONTAIN_ERROR);
    expect(() => contains(undefined as any, 'test')).toThrow(CONTAIN_ERROR);
    expect(() => contains(true as any, 'test')).toThrow(CONTAIN_ERROR);
    expect(() => contains({} as any, 'test')).toThrow(CONTAIN_ERROR);
    expect(setResult).toHaveBeenCalledWith(CONTAIN_ERROR);
  });

  it('should throw an error when second parameter is not a string', () => {
    expect(() => contains('test', 123 as any)).toThrow(CONTAIN_ERROR);
    expect(() => contains('test', null as any)).toThrow(CONTAIN_ERROR);
    expect(() => contains('test', undefined as any)).toThrow(CONTAIN_ERROR);
    expect(() => contains('test', true as any)).toThrow(CONTAIN_ERROR);
    expect(() => contains('test', {} as any)).toThrow(CONTAIN_ERROR);
    expect(setResult).toHaveBeenCalledWith(CONTAIN_ERROR);
  });

  it('should throw an error when both parameters are not strings', () => {
    expect(() => contains(123 as any, 456 as any)).toThrow(CONTAIN_ERROR);
    expect(() => contains(null as any, undefined as any)).toThrow(CONTAIN_ERROR);
    expect(setResult).toHaveBeenCalledWith(CONTAIN_ERROR);
  });
});
