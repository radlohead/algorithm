// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Example:

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

const maxSubArray = (nums) => {
    const result = []
    let numsClone = nums.slice()
    recursion(0, [[]], 0)

    const maxNum = result[0]
        .flat()
        .map((list) => {
            if (list.length) return list.reduce((prev, curr) => prev + curr)
        })
        .sort((a, b) => b - a)[0]

    return maxNum

    function recursion(idx, temp, n) {
        if (idx >= nums.length) {
            temp.push([nums])
            result.push(temp)
            return
        }
        if (numsClone.length === n) n = 0
        numsClone = nums.slice()
        if (temp[idx].length === nums.length) {
            ++idx
            n = 0
        }
        if (!temp[idx]) temp[idx] = []

        temp[idx].push(numsClone.splice(n, idx + 1))
        recursion(idx, temp, ++n)
    }
}

maxSubArray([1, 2]) // 3
maxSubArray([1, 2, -1, -2, 2, 1, -2, 1]) // 3
maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]) // 6
maxSubArray([-1, -2]) // -1
maxSubArray([-1, 3, 1]) // 4
