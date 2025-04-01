import { describe, expect, it, vi } from 'vitest';
import { NUM_ERROR } from '@ast/constants';
import { add } from '@ast/logic/astFunctions/add';
import * as utils from '@ast/utils';

describe('add function', () => {
  // Spy on setResult function
  const setResultSpy = vi.spyOn(utils, 'setResult');

  it('should add two positive numbers correctly', () => {
    const result = add(5, 3);
    expect(result).toBe(8);
    expect(setResultSpy).not.toHaveBeenCalled();
  });

  it('should handle negative numbers correctly', () => {
    expect(add(-5, 3)).toBe(-2);
    expect(add(5, -3)).toBe(2);
    expect(add(-5, -3)).toBe(-8);
  });

  it('should handle zero correctly', () => {
    expect(add(0, 5)).toBe(5);
    expect(add(5, 0)).toBe(5);
    expect(add(0, 0)).toBe(0);
  });

  it('should handle decimal numbers correctly', () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.3);
    expect(add(-1.5, 2.5)).toBe(1);
  });

  it('should throw an error when first parameter is not a number', () => {
    expect(() => add('5', 3)).toThrow(NUM_ERROR);
    expect(setResultSpy).toHaveBeenCalledWith(NUM_ERROR);
  });

  it('should throw an error when second parameter is not a number', () => {
    expect(() => add(5, '3')).toThrow(NUM_ERROR);
    expect(setResultSpy).toHaveBeenCalledWith(NUM_ERROR);
  });

  it('should throw an error when both parameters are not numbers', () => {
    expect(() => add('5', '3')).toThrow(NUM_ERROR);
    expect(setResultSpy).toHaveBeenCalledWith(NUM_ERROR);
  });

  it('should throw an error for null and undefined values', () => {
    expect(() => add(null, 3)).toThrow(NUM_ERROR);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    expect(() => add(5, undefined)).toThrow(NUM_ERROR);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    expect(() => add(null, undefined)).toThrow(NUM_ERROR);
  });
});
