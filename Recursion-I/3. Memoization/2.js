/*
Q: Climbing Stairs

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
*/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n === 1) {
          return 1;
      }
  
      // Initialize an array to store the number of ways to climb to each step
      const dp = new Array(n + 1);
  
      // Base cases
      dp[1] = 1;  // There's only one way to climb to the top of a 1-step staircase
      dp[2] = 2;  // There are two ways to climb to the top of a 2-step staircase
  
      // Fill in the array using the recurrence relation: dp[i] = dp[i-1] + dp[i-2]
      for (let i = 3; i <= n; i++) {
          dp[i] = dp[i - 1] + dp[i - 2];
      }
  
      return dp[n];    
  };