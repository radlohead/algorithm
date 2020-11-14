// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1

// Constraints:

// 1 <= nums.length <= 3 * 104
// -3 * 104 <= nums[i] <= 3 * 104
// Each element in the array appears twice except for one element which appears only once.

function singleNumber(nums) {
    if (!Array.isArray(nums)) throw Error('nums is not array')
    else if (!nums.length) throw Error('nums is empty array')
    else if (nums.length === 1) return nums[0]

    const numSet = new Set()
    nums.forEach((n) => {
        if (numSet.has(n)) {
            numSet.delete(n)
        } else {
            numSet.add(n)
        }
    })
    return Array.from(numSet)[0]
}
singleNumber([2, 2, 1]) // 1
singleNumber([4, 1, 2, 1, 2]) // 4
singleNumber([4, 1, 4, 5, 2, 1, 2]) // 5
singleNumber([1]) // 1
