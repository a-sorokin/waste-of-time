import { setResult } from '@ast/utils';

export const contains = (value: unknown, search: unknown) => {
  if (typeof value !== 'string' || typeof search !== 'string') {
    setResult('Both value and search must be strings');
    throw new Error('Both value and search must be strings');
  }

  return value.includes(search);
};
