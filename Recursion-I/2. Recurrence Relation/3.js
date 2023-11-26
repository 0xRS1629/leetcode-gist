/*
Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
*/

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if (rowIndex < 0) {
        return [];
    }

    // Initialize the first row with [1]
    let row = [1];

    for (let i = 1; i <= rowIndex; i++) {
        // Generate the next row based on the previous row
        const newRow = [];
        newRow[0] = 1;  // The first element of each row is always 1

        for (let j = 1; j < i; j++) {
            // Each element (except the first and last) is the sum of the two elements above it
            newRow[j] = row[j - 1] + row[j];
        }

        newRow[i] = 1;  // The last element of each row is always 1
        row = newRow;
    }

    return row;
};