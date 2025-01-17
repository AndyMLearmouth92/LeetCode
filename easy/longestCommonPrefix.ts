/* Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.

Starter code:

function longestCommonPrefix(strs: string[]): string {
    
};
*/

// Solution 1: Horizontal scanning

function longestCommonPrefix(strs: string[]): string {
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    let j = 0;
    while (j < Math.min(prefix.length, strs[i].length)) {
      if (prefix[j] !== strs[i][j]) {
        break;
      }
      j++;
    }
    prefix = prefix.slice(0, j);
  }
  return prefix;
}

// Solution 2: Vertical Scanning

function longestCommonPrefix(strs: string[]): string {
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 0; j < strs.length; j++) {
      if (i === strs[j].length || strs[j][i] !== strs[0][i]) {
        return strs[j].slice(0, i);
      }
    }
  }
  return strs[0];
}

// Solution 3 Horizontal scanning but with two for loops:

function longestCommonPrefix(strs: string[]): string {
  let prefix = strs[0];
  for (let i = 0; i < prefix.length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (prefix[i] !== strs[j][i]) {
        return prefix.slice(0, i);
      }
    }
  }
  return prefix;
}
