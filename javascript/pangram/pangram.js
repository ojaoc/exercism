export const isPangram = (sentence) => {
  const SPLIT_CHAR = sentence
    .toLowerCase()
    .match(/[a-z]/g);

  if (!SPLIT_CHAR) return false;

  const COUNT = new Set();

  SPLIT_CHAR.forEach(char => {
    return COUNT.add(char);
  });

  // This works as well:

  // const COUNT = SPLIT_CHAR.reduce((obj, char) => {
  //   if (!obj[char]) {
  //     obj[char] = true;
  //   }
  //   return obj;
  // }, {});

  return COUNT.size === 26 ? true : false;
};