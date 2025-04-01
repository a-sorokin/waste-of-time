import { CONTAIN_ERROR } from '@ast/constants';
import { setResult } from '@ast/utils';

export const contains = (value: unknown, search: unknown) => {
  if (typeof value !== 'string' || typeof search !== 'string') {
    setResult(CONTAIN_ERROR);
    throw new Error(CONTAIN_ERROR);
  }

  return value.includes(search);
};
