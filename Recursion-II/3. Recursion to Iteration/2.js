/*
Q: Generate Parentheses

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

*/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = [];

  // Helper function to generate parentheses recursively
  const generate = (current, leftCount, rightCount) => {
    // If both left and right parentheses are used up, add the current combination to the result
    if (leftCount === 0 && rightCount === 0) {
      result.push(current);
      return;
    }

    // Add a left parenthesis if there are remaining left parentheses
    if (leftCount > 0) {
      generate(current + "(", leftCount - 1, rightCount);
    }

    // Add a right parenthesis if there are more left parentheses than right parentheses
    if (rightCount > leftCount) {
      generate(current + ")", leftCount, rightCount - 1);
    }
  };

  // Start the recursive generation
  generate("", n, n);

  return result;
};
