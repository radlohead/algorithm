// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Example:

// Input: "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

const letterCombinations = (digits) => {
    if (digits === '') return []

    const PHONE = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz',
    }

    let prev = ['']
    let curr = []
    for (let i = 0; i < digits.length; ++i) {
        for (let j = 0; j < prev.length; ++j) {
            for (let k = 0; k < PHONE[digits[i]].length; ++k) {
                curr.push(prev[j] + PHONE[digits[i]][k])
            }
        }
        prev = curr
        curr = []
    }

    return prev
}
letterCombinations('23') // ['ad', 'ae', 'af','bd', 'be', 'bf','cd', 'ce', 'cf']
