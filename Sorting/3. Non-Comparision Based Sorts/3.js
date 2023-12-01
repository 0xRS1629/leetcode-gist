/*
Q: Maximum Gap

Given an integer array nums, return the maximum difference between two successive elements in its sorted form. 
If the array contains less than two elements, return 0.

You must write an algorithm that runs in linear time and uses linear extra space.

Example 1:

Input: nums = [3,6,9,1]
Output: 3
Explanation: The sorted form of the array is [1,3,6,9], either (3,6) or (6,9) has the maximum difference 3.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function (nums) {
  if (nums.length < 2) {
    return 0;
  }

  // Radix sort
  radixSort(nums);

  // Calculate the maximum gap
  let maxGap = 0;
  for (let i = 1; i < nums.length; i++) {
    maxGap = Math.max(maxGap, nums[i] - nums[i - 1]);
  }

  return maxGap;
};

// Radix sort implementation
var radixSort = function (nums) {
  const getMax = () => {
    let max = 0;
    for (const num of nums) {
      max = Math.max(max, num);
    }
    return max;
  };

  const countSort = (exp) => {
    const output = Array(nums.length).fill(0);
    const count = Array(10).fill(0);

    for (const num of nums) {
      count[Math.floor(num / exp) % 10]++;
    }

    for (let i = 1; i < 10; i++) {
      count[i] += count[i - 1];
    }

    for (let i = nums.length - 1; i >= 0; i--) {
      const digit = Math.floor(nums[i] / exp) % 10;
      output[count[digit] - 1] = nums[i];
      count[digit]--;
    }

    for (let i = 0; i < nums.length; i++) {
      nums[i] = output[i];
    }
  };

  const maxNum = getMax();

  for (let exp = 1; Math.floor(maxNum / exp) > 0; exp *= 10) {
    countSort(exp);
  }
};
