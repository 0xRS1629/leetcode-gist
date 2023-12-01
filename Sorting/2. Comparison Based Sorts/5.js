/*
Q: Kth Largest Element in an Array

Given an integer array nums and an integer k, return the kth largest element in the array.

Note that it is the kth largest element in the sorted order, not the kth distinct element.

Can you solve it without sorting?

Example 1:

Input: nums = [3,2,1,5,6,4], k = 2
Output: 5
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  for (var i = 0; i < k; i++) {
    var maxIndex = i; // Assume the current index as the maximum index
    var tmp = nums[i]; // Temporary variable to store the current element

    // Iterate through the remaining elements to find the maximum
    for (var j = i + 1; j < nums.length; j++) {
      // If the current element is greater than the element at maxIndex, update maxIndex
      if (nums[j] > nums[maxIndex]) {
        maxIndex = j;
      }
    }

    // Swap the current element with the maximum element found
    nums[i] = nums[maxIndex];
    nums[maxIndex] = tmp;
  }

  // Return the kth greatest element
  return nums[k - 1];
};
