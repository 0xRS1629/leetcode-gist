/*
Q: N-Queens II

The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

Given an integer n, return the number of distinct solutions to the n-queens puzzle.

Example 1:

Input: n = 4
Output: 2
Explanation: There are two distinct solutions to the 4-queens puzzle as shown.

Example 2:

Input: n = 1
Output: 1

*/

/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    let count = 0;
    const isSafe = (board, row, col) => {
        // Check if there is a queen in the same column
        for (let i = 0; i < row; i++) {
            if (board[i] === col ||            // Same column
                board[i] - i === col - row ||   // Same diagonal (left-top to right-bottom)
                board[i] + i === col + row) {   // Same diagonal (right-top to left-bottom)
                return false;
            }
        }
        return true;
    };

    const solveNQueens = (board, row) => {
        if (row === n) {
            // Reached the end of the board, found a solution
            count++;
            return;
        }

        for (let col = 0; col < n; col++) {
            if (isSafe(board, row, col)) {
                // Place a queen and move to the next row
                board[row] = col;
                solveNQueens(board, row + 1);
                // Backtrack: remove the queen for the current row to explore other possibilities
                board[row] = undefined;
            }
        }
    };

    // Start the backtracking process
    solveNQueens(Array(n), 0);

    return count;
};

