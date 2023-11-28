/*
Q: Search a 2D Matrix II

Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.

Example 1:


Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
Output: true

*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return false;
    }

    const rows = matrix.length;
    const cols = matrix[0].length;
    let row = 0;
    let col = cols - 1;

    while (row < rows && col >= 0) {
        const current = matrix[row][col];

        if (current === target) {
            return true;
        } else if (current > target) {
            col--; // Move left in the current row
        } else {
            row++; // Move down to the next row
        }
    }

    return false; // Target not found in the matrix
    
};