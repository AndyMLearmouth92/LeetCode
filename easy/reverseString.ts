/* 344. Reverse String

Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
 

Constraints:

1 <= s.length <= 105
s[i] is a printable ascii character.

Starter code:

function reverseString(s: string[]): void {
    
};
*/

// Solution 1: Built in reverse method

function reverseString(s: string[]): void {
  s.reverse();
}

// Solution 2: Two pointer using destructuring

function reverseString(s: string[]): void {
  let front: number = 0;
  let back: number = s.length - 1;
  while (front < back) {
    [s[front], s[back]] = [s[back], s[front]];
    front++;
    back--;
  }
}

// Solution 3: Two pointer using a temp variable

function reverseString(s: string[]): void {
  let front: number = 0;
  let back: number = s.length - 1;
  while (front < back) {
    let temp = s[front];
    s[front] = s[back];
    s[back] = temp;
    front++;
    back--;
  }
}
