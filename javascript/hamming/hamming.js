export const compute = (strand1, strand2) => {
  if (strand1.length === 0 && strand2.length > 0) {
    throw new Error('left strand must not be empty');
  } else if (strand2.length === 0 && strand1.length > 0) {
    throw new Error('right strand must not be empty');
  } else if (strand1.length !== strand2.length) {
    throw new Error('left and right strands must be of equal length');
  }

  let hammingDistance = 0;

  let split1, split2;
  [split1, split2] = [strand1.split(""), strand2.split("")];

  for (let i = 0; i < split1.length; i++) {
    if (split1[i] !== split2[i]) hammingDistance++;
  }

  return hammingDistance;
};