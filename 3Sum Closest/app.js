// Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

// Example 1:

// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

// Constraints:

// 3 <= nums.length <= 10^3
// -10^3 <= nums[i] <= 10^3
// -10^4 <= target <= 10^4

const threeSumClosest = (nums, target) => {
    if (!nums.length) return 0

    const recursionNums = []
    recursion(nums, [], 0, 3)
    const result = recursionNums
        .map((obj) =>
            obj.map((obj) => obj.n).reduce((prev, curr) => prev + curr)
        )
        .sort((a, b) => b - a)

    if (result.length >= 2) {
        const findNum = result.filter((n) => n === target)[0]
        const targetCompare = () => {
            const highNum = result
                .filter((n) => n >= target)
                .sort((a, b) => a - b)[0]
            const lowNum = result.filter((n) => n < target)[0]

            if (findNum || findNum === 0) return findNum
            else if (
                Math.abs(highNum - target) >= Math.abs(lowNum - target) ||
                typeof highNum === 'undefined'
            )
                return lowNum
            else return highNum
        }

        if (findNum || findNum === 0 || target >= 0) return targetCompare()
        else {
            if (targetCompare()[targetCompare().length - 1]) {
                return targetCompare()[targetCompare().length - 1]
            } else if (result[result.length - 1] >= 0) {
                return result[result.length - 1]
            } else return result[0]
        }
    } else if (result.length <= 1) return result[0]
    else return 0

    function recursion(arr, temp, idx, n) {
        for (let i = idx; i < arr.length; ++i) {
            temp.push({
                n: arr[i],
                i,
            })
            if (temp.length === n) {
                const idxDuplicateRemove = new Set(temp.map((obj) => obj.i))
                    .size

                if (idxDuplicateRemove !== temp.length) {
                    temp.pop()
                } else {
                    recursionNums.push(temp.slice())
                }
            }
            recursion(arr, temp, idx + 1, n)
            temp.pop()
        }
    }
}
threeSumClosest([1, 2, 5, 10, 11], 12) // -13
threeSumClosest([-1, 0, 1, 2, -1, -4], 0)
threeSumClosest([1, 1, 1, 0], -100)
threeSumClosest([-3, -2, -5, 3, -4], -1)
threeSumClosest([1, 1, -1, -1, 3], -1)
threeSumClosest([1, 1, 1, 1], 0)
threeSumClosest([0, 2, 1, -3], 1)
threeSumClosest([1, 1, 1, 0], -100) // 2
threeSumClosest([1, 1, -1], 2)
threeSumClosest([0, 0, 0], 1) // 0
threeSumClosest([-1, 2, 1, -4], 3) // 2
