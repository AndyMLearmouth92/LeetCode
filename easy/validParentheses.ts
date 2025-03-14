/* 20. Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 
Example 1:

Input: s = "()"

Output: true

Example 2:

Input: s = "()[]{}"

Output: true

Example 3:

Input: s = "(]"

Output: false

Example 4:

Input: s = "([])"

Output: true

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.

Starter code:

function isValid(s: string): boolean {
    
};
*/

// Solution 1: Stack with a hashmap:

function isValid(s: string): boolean {
  const stack: string[] = [];
  const closeToOpen: { [key: string]: string } = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  for (let c of s) {
    if (closeToOpen[c]) {
      if (stack.length > 0 && stack[stack.length - 1] === closeToOpen[c]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(c);
    }
  }
  return stack.length === 0;
}

// Solution: 2: Brute force using replace()

function isValid(s: string): boolean {
  while (s.includes("()") || s.includes("{}") || s.includes("[]")) {
    s = s.replace("()", "");
    s = s.replace("{}", "");
    s = s.replace("[]", "");
  }
  return s === "";
}
