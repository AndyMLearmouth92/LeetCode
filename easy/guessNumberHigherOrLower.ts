/* 374. Guess Number Higher or Lower

We are playing the Guess Game. The game is as follows:

I pick a number from 1 to n. You have to guess which number I picked.

Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

You call a pre-defined API int guess(int num), which returns three possible results:

-1: Your guess is higher than the number I picked (i.e. num > pick).
1: Your guess is lower than the number I picked (i.e. num < pick).
0: your guess is equal to the number I picked (i.e. num == pick).
Return the number that I picked.

Example 1:

Input: n = 10, pick = 6
Output: 6
Example 2:

Input: n = 1, pick = 1
Output: 1
Example 3:

Input: n = 2, pick = 1
Output: 1
 
Constraints:

1 <= n <= 231 - 1
1 <= pick <= n

Starter code:

function guessNumber(n: number): number {

};

*/

// Solution 1: Binary search

function guessNumber(n: number): number {
  let l: number = 1;
  let r: number = n;
  while (true) {
    const m: number = l + Math.floor((r - l) / 2);
    let res = guess(m);
    if (res === -1) {
      r = m - 1;
    } else if (res === 1) {
      l = m + 1;
    } else {
      return m;
    }
  }
}
