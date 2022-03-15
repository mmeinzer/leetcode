/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const s = new Set();
  return nums.some((item) => {
    if (s.has(item)) {
      return true;
    }

    s.add(item);
  });
};
