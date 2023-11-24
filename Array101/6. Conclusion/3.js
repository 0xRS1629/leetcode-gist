/*
Q: Find All Numbers Disappeared in an Array

Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers 
in the range [1, n] that do not appear in nums.

Example 1:

Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]

Example 2:

Input: nums = [1,1]
Output: [2]

*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const n = nums.length;

  for (const num of nums) {
    const index = Math.abs(num) - 1;
    if (nums[index] > 0) {
      nums[index] = -nums[index];
    }
  }

  const disappearedNumbers = [];
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
      disappearedNumbers.push(i + 1);
    }
  }

  return disappearedNumbers;
};
