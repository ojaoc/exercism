export const isPangram = (sentence) => {
  const SPLIT_CHAR = sentence
    .toLowerCase()
    .match(/[a-z]/g);

  if (!SPLIT_CHAR) return false;

  const COUNT = SPLIT_CHAR.reduce((obj, char) => {
    if (!obj[char]) {
      obj[char] = true;
    }
    return obj;
  }, {});

  return Object.keys(COUNT).length === 26 ? true : false;
};