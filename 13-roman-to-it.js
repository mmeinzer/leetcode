/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let sum = 0;
  let peek = 1;
  for (let curr = 0; curr < s.length; curr++) {
    if (s[peek] && valueMap[s[curr] + s[peek]]) {
      sum += valueMap[s[curr] + s[peek]];
      curr++;
      peek++;
    } else {
      sum += valueMap[s[curr]];
    }
    peek++;
  }

  return sum;
};

const valueMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
  IV: 4,
  IX: 9,
  XL: 40,
  XC: 90,
  CD: 400,
  CM: 900,
};
