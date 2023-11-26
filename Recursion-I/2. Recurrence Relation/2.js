/*
You are given the root of a binary search tree (BST) and an integer val.

Find the node in the BST that the node's value equals val and return the subtree rooted with that node. 
If such a node does not exist, return null.

Input: root = [4,2,7,1,3], val = 2
Output: [2,1,3]
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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    if (root === null || root.val === val) {
    return root;
}

// If the value is less than the root's value, search in the left subtree
if (val < root.val) {
    return searchBST(root.left, val);
}

// If the value is greater than the root's value, search in the right subtree
return searchBST(root.right, val);
};