import { FETCH_ERROR } from '@ast/constants/constants';
import { setResult } from '@ast/utils/setResult';

export const fetchGet = async (url: unknown) => {
  if (typeof url !== 'string') {
    setResult(FETCH_ERROR);
    throw new Error(FETCH_ERROR);
  }

  try {
    const response = await fetch(url);
    return response.text();
  } catch (error) {
    setResult(FETCH_ERROR);
    return FETCH_ERROR;
  }
};
