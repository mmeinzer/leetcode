/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let sumA;
  let sumB;
  for (const num of nums) {
    // init vars
    if (sumB === undefined) {
      sumB = num;
      sumA = num;
      continue;
    }

    if (num > sumA + num) {
      sumA = num;
    } else {
      sumA += num;
    }

    if (sumA > sumB) {
      sumB = sumA;
    }
  }

  return sumB;
};
