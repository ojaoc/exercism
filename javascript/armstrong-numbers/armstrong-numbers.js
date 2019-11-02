//
// This is only a SKELETON file for the 'Armstrong numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const validate = (int) => {
  let intAsStr = int.toString();
  let separateDigits = [];
  for (let i = 0; i < intAsStr.length; i++) {
    separateDigits.push(intAsStr.charAt(i));
  }
  let result = separateDigits.map(digit => {
    return Math.pow(digit, separateDigits.length);
  }).reduce((x, y) => x + y);
  if (result == int) return true;
  else return false;
};