/* Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]

Output: true

Explanation:

The element 1 occurs at the indices 0 and 3.

Example 2:

Input: nums = [1,2,3,4]

Output: false

Explanation:

All elements are distinct.

Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]

Output: true

 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109

Starter code:

function containsDuplicate(nums: number[]): boolean {
    
};
*/

// Solution 1:

function containsDuplicate(nums: number[]): boolean {
  return new Set(nums).size < nums.length;
}

// Solution 2:

function containsDuplicate(nums: number[]): boolean {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 1;
    } else {
      map[nums[i]]++;
    }
  }
  for (let item in map) {
    if (map[item] > 1) {
      return true;
    }
  }
  return false;
}