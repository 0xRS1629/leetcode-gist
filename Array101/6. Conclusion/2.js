/*
Q: Third Maximum Number

Given an integer array nums, return the third distinct maximum number in this array. 
If the third maximum does not exist, return the maximum number.

Example 1:

Input: nums = [3,2,1]
Output: 1
Explanation:
The first distinct maximum is 3.
The second distinct maximum is 2.
The third distinct maximum is 1.
Example 2:

Input: nums = [1,2]
Output: 2
Explanation:
The first distinct maximum is 2.
The second distinct maximum is 1.
The third distinct maximum does not exist, so the maximum (2) is returned instead.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let firstMax = -Infinity;
  let secondMax = -Infinity;
  let thirdMax = -Infinity;

  const distinctNums = new Set(nums);

  for (const num of distinctNums) {
    if (num > firstMax) {
      thirdMax = secondMax;
      secondMax = firstMax;
      firstMax = num;
    } else if (num > secondMax) {
      thirdMax = secondMax;
      secondMax = num;
    } else if (num > thirdMax) {
      thirdMax = num;
    }
  }

  return distinctNums.size >= 3 ? thirdMax : firstMax;
};
