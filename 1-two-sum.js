/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const need = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (need.has(nums[i])) {
      return [need.get(nums[i]), i];
    }

    need.set(target - nums[i], i);
  }
};
