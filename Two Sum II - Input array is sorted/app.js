// Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.
// The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.

// Note:

// Your returned answers (both index1 and index2) are not zero-based.
// You may assume that each input would have exactly one solution and you may not use the same element twice.

// Example 1:

// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
// Example 2:

// Input: numbers = [2,3,4], target = 6
// Output: [1,3]
// Example 3:

// Input: numbers = [-1,0], target = -1
// Output: [1,2]

// Constraints:

// 2 <= nums.length <= 3 * 104
// -1000 <= nums[i] <= 1000
// nums is sorted in increasing order.
// -1000 <= target <= 1000

function twoSum(numbers, target) {
    const numbersLen = numbers.length
    if (2 > numbersLen || 3 * Math.pow(10, 4) < numbersLen) {
        throw new Error('numbers length가 너무 작거나 큽니다.')
    } else if (1000 < Math.abs(numbers[numbersLen - 1])) {
        throw new Error('numbers의 최소, 최대값을 초과했습니다.')
    } else if (1000 < Math.abs(target)) {
        throw new Error('target의 최소, 최대값을 초과했습니다.')
    }

    const sumIndexs = []
    for (let i = 0; i < numbersLen; ++i) {
        for (let j = i + 1; j < numbersLen; ++j) {
            if (j >= numbersLen) break
            if (numbers[i] + numbers[j] === target) {
                sumIndexs.push([i + 1, j + 1])
            }
        }
    }
    return sumIndexs[0]
}
twoSum([2, 7, 11, 15], 9) //[ 1, 2 ]
twoSum([2, 3, 4], 6) // [ 1, 3 ]
twoSum([-1, 0], -1) // [ 1, 2 ]
