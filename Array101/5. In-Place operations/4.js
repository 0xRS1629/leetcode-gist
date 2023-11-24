/*

Sort Array By Parity

Solution
Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

Return any array that satisfies this condition.

Example 1:

Input: nums = [3,1,2,4]
Output: [2,4,3,1]
Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  let evenPointer = 0;
  let oddPointer = nums.length - 1;

  while (evenPointer < oddPointer) {
    if (nums[evenPointer] % 2 !== 0) {
      let temp = nums[evenPointer];
      nums[evenPointer] = nums[oddPointer];
      nums[oddPointer] = temp;

      oddPointer--;
    } else {
      evenPointer++;
    }
  }

  return nums;
};
