// Count the number of prime numbers less than a non-negative number, n.

// Example 1:

// Input: n = 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
// Example 2:

// Input: n = 0
// Output: 0
// Example 3:

// Input: n = 1
// Output: 0

var countPrimes = function (n) {
    const primeNums = []
    const isPrime = (n) => {
        for (let i = 1; i < n; i++) {
            let isPrimeNum = true

            for (let j = 2; j < i; j++) {
                if (i % j === 0) {
                    isPrimeNum = false
                }
            }

            if (isPrimeNum && i !== 1) {
                primeNums.push(i)
            }
        }
    }
    if (n <= 2) {
        return 0
    } else {
        isPrime(n)
    }

    return primeNums.length
}
