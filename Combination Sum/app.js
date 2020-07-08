// Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

// The same repeated number may be chosen from candidates unlimited number of times.

// Note:

// All numbers (including target) will be positive integers.
// The solution set must not contain duplicate combinations.
// Example 1:

// Input: candidates = [2,3,6,7], target = 7,
// A solution set is:
// [
//   [7],
//   [2,2,3]
// ]
// Example 2:

// Input: candidates = [2,3,5], target = 8,
// A solution set is:
// [
//   [2,2,2,2],
//   [2,3,3],
//   [3,5]
// ]

const combinationSum = (A, K) => {
    const result = []

    recursion(0, [], K)
    return result.length

    function recursion(idx, temp, target) {
        if (target === 0) result.push(temp.slice())
        if (idx === A.length) return
        if (target <= 0) return

        temp.push(A[idx])
        recursion(idx, temp, target - A[idx])
        temp.pop()
        recursion(idx + 1, temp, target)
    }
}
combinationSum([2, 3, 6, 7], 7) // 2
combinationSum([2, 3, 5], 8) // 3
