// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Example 1:

// Input: "()"
// Output: true
// Example 2:

// Input: "()[]{}"
// Output: true
// Example 3:

// Input: "(]"
// Output: false
// Example 4:

// Input: "([)]"
// Output: false
// Example 5:

// Input: "{[]}"
// Output: true

const isValid = (s) => {
    const OPEN_CHARS = ['[', '(', '{']
    const CLOSE_CHARS = [']', ')', '}']
    const stack = []
    s.split('').forEach((v, i) => {
        if (!i && CLOSE_CHARS.includes(v)) stack.push(v)
        if (OPEN_CHARS.includes(v)) stack.push(v)
        if (CLOSE_CHARS.includes(v)) {
            const openIndex = OPEN_CHARS.findIndex(
                (str) => str === stack[stack.length - 1]
            )
            const closeIndex = CLOSE_CHARS.findIndex((str) => str === v)
            if (openIndex === closeIndex) stack.pop()
            else stack.push(v)
        }
    })
    return stack.length ? false : true
}

isValid('()') //true
isValid('()[]{}') //true
isValid('(]') //false
isValid(']') //false
isValid('(])') //false
