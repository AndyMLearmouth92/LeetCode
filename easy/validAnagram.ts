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
  if (s.length !== t.length) {
    return false;
  }

  const firstWord = s.split("").sort().join("");
  const secondWord = t.split("").sort().join("");
  return firstWord === secondWord;
}

// Solution 2:

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  let charMap: { [key: string]: number } = {};

  for (let i = 0; i < s.length; i++) {
    if (!charMap[s[i]]) {
      charMap[s[i]] = 1;
    } else {
      charMap[s[i]]++;
    }
    if (!charMap[t[i]]) {
      charMap[t[i]] = -1;
    } else {
      charMap[t[i]]--;
    }
  }

  for (let key in charMap) {
    if (charMap[key] !== 0) {
      return false;
    }
  }

  return true;
}

// Solution 3:

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  let counts = new Array(26).fill(0);
  for (let i = 0; i < s.length; ++i) {
    counts[s.charCodeAt(i) - "a".charCodeAt(0)]++;
    counts[t.charCodeAt(i) - "a".charCodeAt(0)]--;
  }

  return counts.every((c) => c === 0);
}

// Solution 4:

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }
  let hashMap: { [key: string]: number } = {};

  for (let i = 0; i < s.length; i++) {
    hashMap[s[i]] = (hashMap[s[i]] || 0) + 1;
    hashMap[t[i]] = (hashMap[t[i]] || 0) - 1;
  }

  for (let key in hashMap) {
    if (hashMap[key] !== 0) {
      return false;
    }
  }
  return true;
}

// Solution 5:

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  let hashMap: { [key: string]: number } = {};

  for (const char of s) {
    hashMap[char] = (hashMap[char] || 0) + 1;
  }

  for (const char of t) {
    if (!hashMap[char]) {
      return false;
    }
    hashMap[char]--;
  }
  return true;
}
