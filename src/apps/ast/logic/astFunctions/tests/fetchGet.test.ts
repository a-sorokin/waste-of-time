import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { FETCH_ERROR } from '@ast/constants/constants';
import { fetchGet } from '@ast/logic/astFunctions/fetchGet';
import { setResult } from '@ast/utils/setResult';

// Mock the setResult module
vi.mock('@ast/utils/setResult', () => ({
  setResult: vi.fn(),
}));

describe('fetchGet', () => {
  beforeEach(() => {
    global.fetch = vi.fn();
    vi.clearAllMocks(); // Clear mock call history between tests
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should fetch data successfully and return text', async () => {
    const mockResponse = new Response('success data');
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    global.fetch.mockResolvedValueOnce(mockResponse);

    const result = await fetchGet('https://example.com/api');

    expect(global.fetch).toHaveBeenCalledWith('https://example.com/api');
    expect(result).toBe('success data');
    expect(setResult).not.toHaveBeenCalled();
  });

  it('should throw error when URL is not a string', async () => {
    const invalidUrl = 123;

    await expect(fetchGet(invalidUrl)).rejects.toThrow(FETCH_ERROR);
    expect(setResult).toHaveBeenCalledWith(FETCH_ERROR);
    expect(global.fetch).not.toHaveBeenCalled();
  });

  it('should return FETCH_ERROR when fetch fails', async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    global.fetch.mockRejectedValueOnce(new Error('Network error'));

    const result = await fetchGet('https://example.com/api');

    expect(global.fetch).toHaveBeenCalledWith('https://example.com/api');
    expect(result).toBe(FETCH_ERROR);
    expect(setResult).toHaveBeenCalledWith(FETCH_ERROR);
  });

  it('should handle null URL parameter', async () => {
    await expect(fetchGet(null)).rejects.toThrow(FETCH_ERROR);
    expect(setResult).toHaveBeenCalledWith(FETCH_ERROR);
  });

  it('should handle undefined URL parameter', async () => {
    await expect(fetchGet(undefined)).rejects.toThrow(FETCH_ERROR);
    expect(setResult).toHaveBeenCalledWith(FETCH_ERROR);
  });

  it('should handle object URL parameter', async () => {
    const objectUrl = { url: 'https://example.com' };

    await expect(fetchGet(objectUrl)).rejects.toThrow(FETCH_ERROR);
    expect(setResult).toHaveBeenCalledWith(FETCH_ERROR);
  });
});
