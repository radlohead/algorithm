// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Note:

// The solution set must not contain duplicate triplets.

// Example:

// Given array nums = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

const threeSum = (nums) => {
    let recursionNums = []
    recursion(nums.slice(), [], 0, 3)
    const recursionSumNums = recursionNums
        .filter((n) => 0 === n.reduce((prev, curr) => prev + curr))
        .map((v) => v.sort((a, b) => a - b))

    const result = []
    recursionSumNums.forEach((n) => {
        if (!result.length) result.push(n)
        !JSON.stringify(result).includes(n) && result.push(n)
    })
    return result

    function recursion(arr, temp, idx, n) {
        for (let i = idx; i < arr.length; ++i) {
            temp.push(arr[i])
            if (temp.length === n) {
                recursionNums.push(temp.slice())
            }
            recursion(arr, temp, i + 1, n)
            temp.pop()
        }
    }
}
threeSum([-1, 0, 1, 2, -1, -4]) // [ [ -1, 0, 1 ], [ -1, -1, 2 ] ]
