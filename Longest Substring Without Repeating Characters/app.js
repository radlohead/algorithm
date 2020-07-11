// Given a string, find the length of the longest substring without repeating characters.

// Example 1:

// Input: "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
//              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

const lengthOfLongestSubstring = (s) => {
    if (!s) return 0
    const result = []

    recursion(0, [], 0)
    return result
        .flat()
        .map((v) => {
            if (v.length === Array.from(new Set(v)).length) return v.length
        })
        .filter((v) => v)
        .sort((a, b) => b - a)[0]

    function recursion(idx, temp, n) {
        if (idx === s.length) return
        if (temp.length === s.length - idx) {
            ++idx
            result.push(temp.slice())
            temp = []
            n = 0
        }
        temp.push(s.substr(n, idx + 1))

        recursion(idx, temp, ++n)
    }
}
console.clear()
lengthOfLongestSubstring('abcabcbb') // 3
lengthOfLongestSubstring('bbbbb') //1
lengthOfLongestSubstring('pwwkew') //3
