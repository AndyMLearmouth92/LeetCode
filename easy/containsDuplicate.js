/* Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109

Starter code:

var containsDuplicate = function(nums) {
    
};
*/


// Solution 1:

var containsDuplicate = function(nums) {
    let removedDupes = [...new Set(nums)]
    return removedDupes.length !== nums.length
};

// Solution 2:

var containsDuplicate = function(nums) {
    let map = {}
    for(let element in nums){
        if(!map[nums[element]]){
            map[nums[element]] = 1
        }else{
            map[nums[element]]++
        }
    }
    for (let element in map) {
        if (map[element] > 1) {
            return true
        }
    }
  return false
};



