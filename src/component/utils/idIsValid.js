// EXTRACT MOVIE WITH VALID ID
export const idIsValid = (data) => {
  return data.filter(item => {
    return item.id !== undefined && item.id !== null && item.id !== 'undefined';
  });
};
