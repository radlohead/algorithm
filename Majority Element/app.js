// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

// Example 1:
// Input: [3,2,3]
// Output: 3

// Example 2:
// Input: [2,2,1,1,1,2,2]
// Output: 2

function majorityElement(nums) {
    if (!nums.length) throw new Error('nums is not valid')
    else if (nums.length === 1) return nums[0]
    const numsMap = new Map()
    nums.forEach((n) => {
        if (numsMap.has(n)) {
            numsMap.set(n, numsMap.get(n) + 1)
        } else {
            numsMap.set(n, 1)
        }
    })
    return Array.from(numsMap).sort((a, b) => b[1] - a[1])[0][0]
}
majorityElement([3, 2, 3]) // 3
majorityElement([2, 2, 1, 1, 1, 2, 2]) // 2
