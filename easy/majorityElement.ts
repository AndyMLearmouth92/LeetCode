/* Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 

Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
 
Follow-up: Could you solve the problem in linear time and in O(1) space?

Starter code:

function majorityElement(nums: number[]): number {
    
};
*/

// Solution 1:

function majorityElement(nums: number[]): number {
  let res: number = 0;
  let count: number = 0;

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      res = nums[i];
    }
    count += nums[i] === res ? 1 : -1;
  }
  return res;
}

// Solution 2:

function majorityElement(nums: number[]): number {
  const hashMap: { [key: number]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    if (hashMap.hasOwnProperty(nums[i])) {
      hashMap[nums[i]]++;
    } else {
      hashMap[nums[i]] = 1;
    }
  }

  let mostCommonElement: number = -1;
  let maxCount: number = 0;
  for (const [key, value] of Object.entries(hashMap)) {
    const numKey = parseInt(key);
    if (value > maxCount) {
      maxCount = value;
      mostCommonElement = numKey;
    }
  }
  return mostCommonElement;
}
