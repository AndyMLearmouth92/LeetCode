/* Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

Example 1:

Input: s = "leetcode"
Output: 0
Example 2:

Input: s = "loveleetcode"
Output: 2
Example 3:

Input: s = "aabb"
Output: -1
 

Constraints:

1 <= s.length <= 105
s consists of only lowercase English letters.

Starter code:

var firstUniqChar = function(s) {
    
};
*/

// Solution:

var firstUniqChar = function(s) {
    let input = s.split('')
    for(let i = 0; i < input.length; i++){
        const e = input[i]
        if(input.indexOf(e) === input.lastIndexOf(e)) return i
    }
    return -1
};