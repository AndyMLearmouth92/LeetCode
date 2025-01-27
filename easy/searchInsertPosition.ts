/* 35. Search Insert Position

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104

Starter code:

function searchInsert(nums: number[], target: number): number {
    
};

*/

// Solution 1: Binary search

function searchInsert(nums: number[], target: number): number {
  let l: number = 0;
  let r: number = nums.length - 1;

  while (l <= r) {
    const m: number = l + Math.floor((r - l) / 2);
    if (nums[m] === target) {
      return m;
    } else if (nums[m] < target) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
  return l;
}

// Solution 2: Linear search

function searchInsert(nums: number[], target: number): number {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i;
    }
  }
  return nums.length;
}

// Solution 3: Linear search

function searchInsert(nums: number[], target: number): number {
  let index: number = nums.findIndex((e) => e >= target);
  return index !== -1 ? index : nums.length;
}
