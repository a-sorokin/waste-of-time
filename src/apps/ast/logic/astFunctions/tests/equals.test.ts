import { describe, expect, it } from 'vitest';
import { equals } from '@ast/logic/astFunctions/equals';

describe('equals function', () => {
  it('should return true for identical numbers', () => {
    expect(equals(5, 5)).toBe(true);
    expect(equals(0, 0)).toBe(true);
    expect(equals(-10, -10)).toBe(true);
    expect(equals(3.14, 3.14)).toBe(true);
  });

  it('should return false for different numbers', () => {
    expect(equals(5, 10)).toBe(false);
    expect(equals(-5, 5)).toBe(false);
    expect(equals(3.14, 3.15)).toBe(false);
  });

  it('should handle string comparison correctly', () => {
    expect(equals('hello', 'hello')).toBe(true);
    expect(equals('hello', 'world')).toBe(false);
    expect(equals('', '')).toBe(true);
  });

  it('should be case sensitive for strings', () => {
    expect(equals('Hello', 'hello')).toBe(false);
    expect(equals('WORLD', 'world')).toBe(false);
  });

  it('should handle boolean comparison correctly', () => {
    expect(equals(true, true)).toBe(true);
    expect(equals(false, false)).toBe(true);
    expect(equals(true, false)).toBe(false);
  });

  it('should handle null and undefined correctly', () => {
    expect(equals(null, null)).toBe(true);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    expect(equals(undefined, undefined)).toBe(true);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    expect(equals(null, undefined)).toBe(false);
  });

  it('should correctly compare across different types', () => {
    expect(equals('5', 5)).toBe(false);
    expect(equals(0, false)).toBe(false);
    expect(equals('', false)).toBe(false);
    expect(equals(1, true)).toBe(false);
  });

  it('should handle NaN values correctly', () => {
    expect(equals(NaN, NaN)).toBe(false); // This is JavaScript's behavior with strict equality
  });

  it('should handle object references correctly', () => {
    const obj1 = { a: 1 };
    const obj2 = { a: 1 };
    const obj3 = obj1;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    expect(equals(obj1, obj2)).toBe(false); // Different references with same content
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    expect(equals(obj1, obj3)).toBe(true); // Same reference
  });

  it('should handle array references correctly', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3];
    const arr3 = arr1;

    expect(equals(arr1, arr2)).toBe(false); // Different references with same content
    expect(equals(arr1, arr3)).toBe(true); // Same reference
  });
});
