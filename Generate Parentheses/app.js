// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]

const generateParenthesis = (n) => {
    const result = []
    const recurrence = (left, right, val) => {
        if (left === n && right === n) {
            result.push(val)
            return
        }
        if (left < n) {
            recurrence(left + 1, right, `${val}(`)
        }
        if (left > right && right < n) {
            recurrence(left, right + 1, `${val})`)
        }
    }
    recurrence(0, 0, '')
}
generateParenthesis(3) // [ '((()))', '(()())', '(())()', '()(())', '()()()' ]
