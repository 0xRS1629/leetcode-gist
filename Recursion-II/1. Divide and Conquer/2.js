/*
Q: Validate Binary Search Tree

Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.

Example 1:


Input: root = [2,1,3]
Output: true

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
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    const helper = (node, lower, upper) => {
        if (!node) {
            return true; // An empty tree is a valid BST
        }

        const val = node.val;

        // Check if the current node's value is within the valid range
        if (val <= lower || val >= upper) {
            return false;
        }

        // Recursively check the left and right subtrees
        return (
            helper(node.left, lower, val) && // Check left subtree with updated upper bound
            helper(node.right, val, upper) // Check right subtree with updated lower bound
        );
    };

    // Call the helper function starting with the root and the entire range of possible values
    return helper(root, -Infinity, Infinity);    
};