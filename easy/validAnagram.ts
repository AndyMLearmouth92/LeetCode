/* Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Example 1:

Input: s = "anagram", t = "nagaram"

Output: true

Example 2:

Input: s = "rat", t = "car"

Output: false

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

Starter code:

function isAnagram(s: string, t: string): boolean {
    
};
*/

// Solution 1:

function isAnagram(s: string, t: string): boolean {
  const firstWord = s.split("").sort().join("");
  const secondWord = t.split("").sort().join("");
  return firstWord === secondWord;
}
