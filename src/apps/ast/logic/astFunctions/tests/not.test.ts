import { describe, expect, it } from 'vitest';
import { not } from '@ast/logic/astFunctions/not';

describe('not function', () => {
  it('should return false for truthy values', () => {
    expect(not(true)).toBe(false);
    expect(not(1)).toBe(false);
    expect(not('hello')).toBe(false);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    expect(not({})).toBe(false);
    expect(not([])).toBe(false);
    expect(not(42)).toBe(false);
    expect(not(Infinity)).toBe(false);
    expect(not(-42)).toBe(false);
  });

  it('should return true for falsy values', () => {
    expect(not(false)).toBe(true);
    expect(not(0)).toBe(true);
    expect(not('')).toBe(true);
    expect(not(null)).toBe(true);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    expect(not(undefined)).toBe(true);
    expect(not(NaN)).toBe(true);
  });

  it('should handle edge cases correctly', () => {
    // Empty strings and arrays
    expect(not('')).toBe(true);
    expect(not([])).toBe(false); // Empty arrays are truthy in JavaScript

    // String with only whitespace
    expect(not(' ')).toBe(false); // Strings with content (even just spaces) are truthy

    // Numbers
    expect(not(0)).toBe(true);
    expect(not(-0)).toBe(true);
    expect(not(0.0)).toBe(true);
  });

  it('should operate consistently with JavaScript logical NOT operator', () => {
    const values = [true, false, 0, 1, '', 'hello', null, undefined, NaN, {}, []];

    for (const value of values) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      expect(not(value)).toBe(!value);
    }
  });
});
