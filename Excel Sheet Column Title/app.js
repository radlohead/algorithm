// Given a positive integer, return its corresponding column title as appear in an Excel sheet.

// For example:

//     1 -> A
//     2 -> B
//     3 -> C
//     ...
//     26 -> Z
//     27 -> AA
//     28 -> AB
//     ...
// Example 1:

// Input: 1
// Output: "A"
// Example 2:

// Input: 28
// Output: "AB"
// Example 3:

// Input: 701
// Output: "ZY"

function convertToTitle(n) {
    if (typeof n !== 'number') throw new Error('typeof n is not number')
    else if (!n) throw new Error('n is not valid')

    const digits = []
    while (n > 0) {
        digits.unshift((n - 1) % 26)
        n = Math.trunc((n - 1) / 26)
    }
    return String.fromCharCode(...digits.map((d) => d + 65))
}
convertToTitle(1) // A
convertToTitle(28) //AB
convertToTitle(701) //ZY
