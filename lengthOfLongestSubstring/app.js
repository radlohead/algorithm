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
    if (!s || !s.length) return 0
    const list = Array(s.length)
        .fill(s)
        .map((str, i) => str.substring(i).split(''))
    const longList = (list) => {
        return list
            .map((strList) => {
                return strList.map((str, i, arr) => {
                    const operatorList = arr
                        .join('')
                        .substring(0, i + 1)
                        .split('')
                    const duplicateRemove = Array.from(
                        new Set(operatorList.slice())
                    )
                    if (operatorList.length === duplicateRemove.length) {
                        return operatorList
                    }
                })
            })
            .flat()
            .sort((a, b) => b.length - a.length)[0].length
    }
    return longList(list)
}

lengthOfLongestSubstring('abcabcbb') // 3
lengthOfLongestSubstring('bbbbb') //1
lengthOfLongestSubstring('pwwkew') //3
lengthOfLongestSubstring('ohomm') //3
