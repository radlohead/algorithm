// You are climbing a stair case. It takes n steps to reach to the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:

// Input: 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

const climbStairs = (n) => {
    if (n === 0) return 0

    const result = new Map()
    const recursion = (num) => {
        if (result.has(num)) return result.get(num)
        if (num === 0) return 0
        if (num === 1) return 1
        if (num === 2) return 2

        result.set(num, recursion(num - 2) + recursion(num - 1))
        return result.get(num)
    }
    return recursion(n)
}

climbStairs(2) // 2
climbStairs(3) // 3
climbStairs(7) // 7
