/*
Q: Pow(x, n)

Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

Example 1:

Input: x = 2.00000, n = 10
Output: 1024.00000
*/

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  // Base case: x^0 is always 1
  if (n === 0) {
    return 1;
  }
  // If n is negative, calculate the reciprocal of x raised to the absolute value of n
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  // Recursive calculation using the identity: x^n = x^(n/2) * x^(n/2)
  const halfPow = myPow(x, Math.floor(n / 2));

  // If n is even, x^n = x^(n/2) * x^(n/2)
  if (n % 2 === 0) {
    return halfPow * halfPow;
  } else {
    // If n is odd, x^n = x^(n/2) * x^(n/2) * x
    return halfPow * halfPow * x;
  }
};
