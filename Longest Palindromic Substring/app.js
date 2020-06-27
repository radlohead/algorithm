// Example 1:
// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.

// Example 2:
// Input: "cbbd"
// Output: "bb"

const solution = (s) => {
    return s
        .split('')
        .map((v, i, arr) => arr.map((v, j) => arr.slice(i, j + 1)))
        .flat()
        .filter((arr) => arr.length)
        .filter(
            (arr) => arr.slice().join('') === arr.slice().reverse().join('')
        )
        .sort((a, b) => b.length - a.length)[0]
        .join('')
}
solution('babad') // bab
solution('cbbd') // bb
