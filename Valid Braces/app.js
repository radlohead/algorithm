// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.

// Examples
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False

const solution = arg => {
    const MARK_LIST = {
        OPEN: ['(', '{', '['],
        CLOSE: [')', '}', ']']
    }
    const stack = []

    arg.split('').forEach(mark => {
        if (MARK_LIST.CLOSE.includes(mark)) {
            if (!stack.length) {
                stack.push(MARK_LIST.CLOSE.indexOf(mark))
            } else if (
                stack[stack.length - 1] === MARK_LIST.CLOSE.indexOf(mark)
            ) {
                stack.pop()
            } else {
                return false
            }
        } else {
            stack.push(MARK_LIST.OPEN.indexOf(mark))
        }
    })

    return !stack.length
}
solution(']') // false
solution('(){}[]') // true
solution('([{}])') // true
solution('(}') // false
solution('[(])') // false
