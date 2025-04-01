export const fetchGet = async (url: unknown) => {
  if (typeof url !== 'string') {
    throw new Error('URL must be a string');
  }

  try {
    const response = await fetch(url);
    return response.text();
  } catch (error) {
    // console.error(error);
  }
};
