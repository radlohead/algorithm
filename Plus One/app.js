// Given a non-empty array of digits representing a non-negative integer, increment one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

// Example 1:

// Input: [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Example 2:

// Input: [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.

const plusOne = (digits) => {
    if (digits[digits.length - 1] === 9) {
        const digitsLen = digits.slice().length
        const beforeNum = digits.splice(
            0,
            digitsLen -
                digits
                    .join('')
                    .match(/\d{0,1}9+$/g)
                    .join('').length
        )
        const endNum = String(
            +digits
                .join('')
                .match(/\d{0,1}9+$/g)
                .join('') + 1
        ).split('')
        const result = [...beforeNum]
        endNum.forEach((v) => {
            result.push(+v)
        })
        return result
    }
    digits[digits.length - 1] += 1
    const lastNums = String(digits[digits.length - 1]).split('')
    digits.pop()
    lastNums.forEach((v) => digits.push(Number(v)))
    return digits
}

// plusOne([9])
// plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3])
// plusOne([2, 4, 9, 3, 9])
plusOne([
    5,
    2,
    2,
    6,
    5,
    7,
    1,
    9,
    0,
    3,
    8,
    6,
    8,
    6,
    5,
    2,
    1,
    8,
    7,
    9,
    8,
    3,
    8,
    4,
    7,
    2,
    5,
    8,
    9,
])
