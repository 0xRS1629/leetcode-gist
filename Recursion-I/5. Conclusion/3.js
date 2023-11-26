/*
Q: Unique Binary Search Trees II

Given an integer n, return all the structurally unique BST's (binary search trees), 
which has exactly n nodes of unique values from 1 to n. Return the answer in any order.

Input: n = 3
Output: [[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],[3,2,null,1]]
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  if (n === 0) {
    return [];
  }

  // Helper function to generate BSTs recursively
  const generate = (start, end) => {
    const result = [];

    if (start > end) {
      // If start is greater than end, add null to the result
      result.push(null);
      return result;
    }

    for (let i = start; i <= end; i++) {
      // For each value i from start to end, consider it as the root
      const leftSubtrees = generate(start, i - 1);
      const rightSubtrees = generate(i + 1, end);

      // Combine left and right subtrees to form unique BSTs
      for (const left of leftSubtrees) {
        for (const right of rightSubtrees) {
          const root = new TreeNode(i);
          root.left = left;
          root.right = right;
          result.push(root);
        }
      }
    }

    return result;
  };

  return generate(1, n);
};
