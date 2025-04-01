import { setResult } from '@ast/utils';

export const fetchGet = async (url: unknown) => {
  if (typeof url !== 'string') {
    setResult('URL must be a string');
    throw new Error('URL must be a string');
  }

  try {
    const response = await fetch(url);
    return response.text();
  } catch (error) {
    // console.error(error);
  }
};
