/* Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
 

Constraints:

1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.

Starter code:

var canConstruct = function(ransomNote, magazine) {
    
};
*/

// Solution 1:

var canConstruct = function (ransomNote, magazine) {
  for (const char of magazine) {
    ransomNote = ransomNote.replace(char, "");
  }
  if (!ransomNote) {
    return true;
  } else {
    return false;
  }
};

// Solution 2:

var canConstruct = function (ransomNote, magazine) {
  let map = {};
  for (let char of magazine) {
    if (map[char]) {
      map[char]++;
    } else {
      map[char] = 1;
    }
  }
  for (let char of ransomNote) {
    if (map[char] === 0 || !map[char]) {
      return false;
    } else {
      map[char]--;
    }
  }
  return true;
};
