// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// Follow up: Could you write an algorithm with O(log n) runtime complexity?

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]

var searchRange = function (nums, target) {
    const result = nums
        .map((n, i) => n === target && i)
        .filter((n) => typeof n === 'number')

    if (result.length === 0) {
        return [-1, -1]
    } else if (result.length === 1) {
        return result.concat(result)
    } else if (result.length >= 3) {
        result.splice(1, result.length - 2)
        return result
    } else {
        return result
    }
}
