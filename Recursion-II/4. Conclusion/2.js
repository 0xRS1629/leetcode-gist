/*

Q: Permutations

Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

Example 1:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = [];

  const backtrack = (currentPermutation) => {
    if (currentPermutation.length === nums.length) {
      result.push([...currentPermutation]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (!currentPermutation.includes(nums[i])) {
        currentPermutation.push(nums[i]);
        backtrack(currentPermutation);
        currentPermutation.pop();
      }
    }
  };

  backtrack([]);

  return result;
};
