/*
Q: Query Kth Smallest Trimmed Number

You are given a 0-indexed array of strings nums, where each string is of equal length and consists of only digits.

You are also given a 0-indexed 2D integer array queries where queries[i] = [ki, trimi]. For each queries[i], you need to:

Trim each number in nums to its rightmost trimi digits.
Determine the index of the kith smallest trimmed number in nums. If two trimmed numbers are equal, 
the number with the lower index is considered to be smaller.
Reset each number in nums to its original length.
Return an array answer of the same length as queries, where answer[i] is the answer to the ith query.

Note:

To trim to the rightmost x digits means to keep removing the leftmost digit, until only x digits remain.
Strings in nums may contain leading zeros.

Example 1:

Input: nums = ["102","473","251","814"], queries = [[1,1],[2,3],[4,2],[1,2]]
Output: [2,2,1,0]
Explanation:
1. After trimming to the last digit, nums = ["2","3","1","4"]. The smallest number is 1 at index 2.
2. Trimmed to the last 3 digits, nums is unchanged. The 2nd smallest number is 251 at index 2.
3. Trimmed to the last 2 digits, nums = ["02","73","51","14"]. The 4th smallest number is 73.
4. Trimmed to the last 2 digits, the smallest number is 2 at index 0.
Note that the trimmed number "02" is evaluated as 2.
*/

/**
 * @param {string[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var smallestTrimmedNumbers = function (nums, queries) {
  const answer = [];

  for (const [k, trim] of queries) {
    const trimmedNumbers = nums.map((num) => num.slice(-trim));
    const indexedTrimmedNumbers = trimmedNumbers.map((num, index) => [
      num,
      index,
    ]);

    indexedTrimmedNumbers.sort((a, b) => a[0].localeCompare(b[0]));

    const kthSmallestTrimmedNumber = indexedTrimmedNumbers[k - 1];
    answer.push(kthSmallestTrimmedNumber[1]);
  }

  return answer;
};
