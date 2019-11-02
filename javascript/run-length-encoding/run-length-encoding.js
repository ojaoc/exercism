export const encode = (code) => {
  let splitCodeArr = code.split('');
  let countArr = [];
  let dataObj = {};
  let current = null;
  let count = 0;
  for (let i = 0; i < splitCodeArr.length; i++) {
      if (splitCodeArr[i] !== current) {
        if (count > 0) {
          if (count > 1) countArr.push(dataObj[current] = count);
          countArr.push(current);
        }
        current = splitCodeArr[i];
        count = 1;
      } else {
        count++;
        current = splitCodeArr[i];
      }
  }
  if (count > 0) {
    if (count > 1) countArr.push(dataObj[current] = count);
    countArr.push(current);
  }
  return countArr.join('');
};

export const decode = (code) => {
  const regex = /\s|[a-z]|[1-9]+/gi;
  const numRegex = /\d+/g;
  const separateStr = code.match(regex);
  let multiplier = null;
  let result = [];
  if (separateStr !== null) {
    for (let i = 0; i < separateStr.length; i++) {
      if (numRegex.test(separateStr[i])) {
        multiplier = parseInt(separateStr[i]);
        continue;
      } else {
        if (multiplier !== null) {
          for (let n = 0; n < multiplier; n++) {
            result.push(separateStr[i]);
          }
          multiplier = null;
        } else {
          result.push(separateStr[i]);
        }
      }
    }
    return result.join('');
  } else {
    return result.toString();
  }
};