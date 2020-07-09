// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

// Each number in candidates may only be used once in the combination.

// Note:

// All numbers (including target) will be positive integers.
// The solution set must not contain duplicate combinations.
// Example 1:

// Input: candidates = [10,1,2,7,6,1,5], target = 8,
// A solution set is:
// [
//   [1, 7],
//   [1, 2, 5],
//   [2, 6],
//   [1, 1, 6]
// ]
// Example 2:

// Input: candidates = [2,5,2,1,2], target = 5,
// A solution set is:
// [
//   [1,2,2],
//   [5]
// ]

const combinationSum2 = (A, K) => {
    const result = []

    A.sort((a, b) => a - b)
    recursion(0, [], K)
    return result

    function recursion(idx, temp, target) {
        if (target === 0) {
            result.push(temp)
            return
        }

        for (let i = idx; i < A.length; ++i) {
            if (A[i] <= target) {
                recursion(i + 1, [...temp, A[i]], target - A[i])
            }
            while (A[i + 1] === A[i]) ++i
        }
        return result
    }
}
combinationSum2([10, 1, 2, 7, 6, 1, 5], 8)
// [
//     [1, 7],
//     [1, 2, 5],
//     [2, 6],
//     [1, 1, 6]
// ]

combinationSum2([2, 5, 2, 1, 2], 5)
// [
//     [1,2,2],
//     [5]
// ]
