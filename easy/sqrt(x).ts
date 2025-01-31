/* 69. Sqrt(x)

Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

Example 1:

Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.
Example 2:

Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
 
Constraints:

0 <= x <= 231 - 1

Starter code:

function mySqrt(x: number): number {
    
};

*/

// Solution 1: Binary search

function mySqrt(x: number): number {
  let l: number = 0;
  let r: number = x;
  let res: number = 0;

  while (l <= r) {
    const m: number = Math.floor(l + (r - l) / 2);
    if (m * m > x) {
      r = m - 1;
    } else if (m * m < x) {
      l = m + 1;
      res = m;
    } else {
      return m;
    }
  }
  return res;
}

// Solution 2: Methods

function mySqrt(x: number): number {
  return Math.floor(Math.sqrt(x));
}

// Solution 3: Brute force

function mySqrt(x: number): number {
  if (x === 0) {
    return 0;
  }
  let res: number = 1;

  for (let i = 1; i <= x; i++) {
    if (i * i > x) {
      return res;
    }
    res = i;
  }
  return res;
}
