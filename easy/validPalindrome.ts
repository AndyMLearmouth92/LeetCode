/*125. Valid Palindrome

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 

Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.

Starter code:

function isPalindrome(s: string): boolean {
    
};

*/

// Solution 1: Two pointer

function isAlphaNumeric(char) {
  return (
    (char >= "A" && char <= "Z") ||
    (char >= "a" && char <= "z") ||
    (char >= "0" && char <= "9")
  );
}

function isPalindrome(s: string): boolean {
  let front: number = 0;
  let back: number = s.length - 1;
  while (front < back) {
    while (front < back && !isAlphaNumeric(s[front])) {
      front++;
    }
    while (back > front && !isAlphaNumeric(s[back])) {
      back--;
    }
    if (s[front].toLowerCase() !== s[back].toLowerCase()) {
      return false;
    }
    front++;
    back--;
  }
  return true;
}

// Solution 2: Reverse string

function isAlphaNumeric(char) {
  return (
    (char >= "A" && char <= "Z") ||
    (char >= "a" && char <= "z") ||
    (char >= "0" && char <= "9")
  );
}

function isPalindrome(s: string): boolean {
  let newString = "";
  for (let char of s) {
    if (isAlphaNumeric(char)) {
      newString += char.toLowerCase();
    }
  }
  return newString === newString.split("").reverse().join("");
}
