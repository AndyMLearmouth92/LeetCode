/* Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

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

var searchInsert = function(nums, target) {
    
};
*/

// Solution 1: 

var searchInsert = function(nums, target) {
    if(nums.includes(target)){
        return nums.indexOf(target)
    }else{
        return [...nums, target].sort((a,b) => a-b).indexOf(target)
    }
};

// Solution 2:

var searchInsert = (nums, target) => nums.indexOf(target) === -1 ? nums.push(target).sortedArr = nums.sort((a,b) => a-b).indexOf(target) : nums.indexOf(target)