// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You may assume no duplicates in the array.

// Example 1:

// Input: [1,3,5,6], 5
// Output: 2
// Example 2:

// Input: [1,3,5,6], 2
// Output: 1
// Example 3:

// Input: [1,3,5,6], 7
// Output: 4
// Example 4:

// Input: [1,3,5,6], 0
// Output: 0

const searchInsert = (nums, target) => {
    const targetFindIndex = nums.findIndex((n) => n === target)
    if (targetFindIndex > -1) return targetFindIndex

    const result = nums
        .map((n, i, arr) => {
            const nextNum = arr[i + 1]
            const isTargetLessNextNum = nextNum > target
            const isTargetMostN = n < target
            if (!i) {
                if (n > target) return 0
                else if (isTargetMostN && isTargetLessNextNum) return 1
            } else if (
                (i === arr.length - 1 && isTargetMostN) ||
                (isTargetMostN && isTargetLessNextNum)
            ) {
                return i + 1
            }
        })
        .filter((n) => n > -1)[0]
    return result
}
searchInsert([1, 3, 5, 6], 5) // 2
searchInsert([1, 3, 5, 6], 2) // 1
searchInsert([1, 3, 5, 6], 7) // 4
searchInsert([1, 3, 5, 6], 0) // 0
