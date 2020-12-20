// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Example 1:

// Input: "A man, a plan, a canal: Panama"
// Output: true
// Example 2:

// Input: "race a car"
// Output: false

function isPalindrome(s) {
    if (!s.length) return true
    const strMatch = s.match(/[a-z|A-Z|0-9]/g)
    if (!strMatch) return true
    return (
        strMatch.join('').toLowerCase() ===
        strMatch.reverse().join('').toLowerCase()
    )
}
isPalindrome(' ') // true
isPalindrome('A man, a plan, a canal: Panama') // true
isPalindrome('race a car') // false
