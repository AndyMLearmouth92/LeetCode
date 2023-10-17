/* Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

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

var isAnagram = function(s, t) {
    
};
*/

// Solution 1:

var isAnagram = function(s, t) {
    let firstWord = s.split('').sort()
    let secondWord = t.split('').sort()
    if(s.length !== t.length) return false
    
    for(let i = 0; i < firstWord.length; i++){
        if(firstWord[i] !== secondWord[i]){
            return false
        }
    }
    return true
};