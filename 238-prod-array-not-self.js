/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const m = new Map();
  nums.forEach((num) => {
    m.has(num) ? m.set(num, m.get(num) + 1) : m.set(num, 1);
  });

  return nums.map((current) => {
    let prod = 1;
    for (const [key, count] of m.entries()) {
      if (key === current) {
        prod *= key ** (count - 1);
      } else {
        prod *= key ** count;
      }

      if (prod === 0) return 0;
    }

    return prod;
  });
};
