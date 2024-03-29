/* Given the head of a singly linked list, reverse the list, and return the reversed list.

Example 1:

Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
Example 2:

Input: head = [1,2]
Output: [2,1]
Example 3:

Input: head = []
Output: []
 
Constraints:

The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000

Starter code:

var reverseList = function(head) {
    
};
*/

// Solution 1:

var reverseList = function (head) {
  if (head === null) return head;

  let currentNode = head;
  let prevNode = null;
  let nextNode = null;

  while (currentNode) {
    nextNode = currentNode.next;
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = nextNode;
    nextNode = null;
  }
  head = prevNode;
  return head;
};

// Solution 2:

var reverseList = function (head) {
  if (head === null || head.next === null) {
    return head;
  }
  let reversedHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return reversedHead;
};
