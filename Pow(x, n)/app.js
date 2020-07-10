// Implement pow(x, n), which calculates x raised to the power n (xn).

// Example 1:

// Input: 2.00000, 10
// Output: 1024.00000
// Example 2:

// Input: 2.10000, 3
// Output: 9.26100
// Example 3:

// Input: 2.00000, -2
// Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.25
// Note:

// -100.0 < x < 100.0
// n is a 32-bit signed integer, within the range [−231, 231 − 1]

const myPow = (x, y) => {
    const recursion = (x) => {
        if (y === 0) return 1.0
        else if (y > 0) {
            if (y === 1) return x
            --y
            return recursion(x) * recursion(x)
        } else {
            if (y === -1) return x
            ++y
            return recursion(x) * recursion(x)
        }
    }
    return y > 0 ? recursion(x).toFixed(5) : (1 / recursion(x)).toFixed(5)
}
myPow(2.0, 10) // 1024.00000
myPow(2.1, 3) // 9.26100
myPow(2.0, -2) // 0.25000
myPow(34.00515, -3) // 0.00002543114506779099
myPow(0.44528, 0) // 1
myPow(0.44894, -5) // 54.83508
