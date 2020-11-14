// Given a non-empty array of integers, every element appears three times except for one, which appears exactly once. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// Example 1:

// Input: [2,2,3,2]
// Output: 3
// Example 2:

// Input: [0,1,0,1,0,1,99]
// Output: 99

function singleNumber(nums) {
    if (!Array.isArray(nums)) throw Error('nums is not array')
    else if (!nums.length) throw Error('nums is empty')
    else if (nums.length === 1) return nums[0]

    let result = []
    const numSet = new Set()
    for (num of nums) {
        if (numSet.has(num)) {
            result = result.filter((n) => n !== num)
        } else {
            numSet.add(num)
            result.push(num)
        }
    }
    return result[0]
}
singleNumber([2, 2, 3, 2]) // 3
singleNumber([0, 1, 0, 1, 0, 1, 99]) // 99
