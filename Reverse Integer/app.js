// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21

const solution = (num) => {
    const reverseNum =
        num > 0
            ? Number(String(num).split('').reverse().join(''))
            : -Number(String(Math.abs(num)).split('').reverse().join(''))

    if (reverseNum > 2147483641 || reverseNum < -2147483641) return 0
    else return reverseNum
}

solution(123) // 321
solution(-214748364) // 0
