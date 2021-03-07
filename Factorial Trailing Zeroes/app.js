// Given an integer n, return the number of trailing zeroes in n!.
// Follow up: Could you write a solution that works in logarithmic time complexity?

// Example 1:
// Input: n = 3
// Output: 0
// Explanation: 3! = 6, no trailing zero.

// Example 2:
// Input: n = 5
// Output: 1
// Explanation: 5! = 120, one trailing zero.

// Example 3:
// Input: n = 0
// Output: 0

const trailingZeroes = (n) => {
    let result = 0

    while (n >= 5) {
        let temp = Math.floor(n / 5)
        result = temp
        n = result
    }
    return result
}
trailingZeroes(3) // 0
trailingZeroes(5) // 1
trailingZeroes(0) // 0
