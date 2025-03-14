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

// Solution 1: Boyer-Moore Voting Algorithm

function majorityElement(nums: number[]): number {
  let majorityElementCandidate: number = 0;
  let count: number = 0;

  for (let num of nums) {
    if (count === 0) {
      majorityElementCandidate = num;
    }
    count += majorityElementCandidate === num ? 1 : -1;
  }
  return majorityElementCandidate;
}

// Solution 2: Sorting

function majorityElement(nums: number[]): number {
  let sortedNums: number[] = nums.sort();
  return sortedNums[Math.floor(nums.length / 2)];
}

// Solution 3: Hash map using a JS object

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

// Solution 4: Brute force loop within a loop

function majorityElement(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    let count: number = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        count++;
      }
    }
    if (count > nums.length / 2) {
      return nums[i];
    }
  }
  return -1;
}
