// All DNA is composed of a series of nucleotides abbreviated as A, C, G, and T, for example: "ACGAATTCCG". When studying DNA, it is sometimes useful to identify repeated sequences within the DNA.

// Write a function to find all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule.

// Example:

// Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"

// Output: ["AAAAACCCCC", "CCCCCAAAAA"]

const findRepeatedDnaSequences = s => {
    const sEachList = Array(s.length)
        .fill('')
        .map((empty, i) => (empty = s.substr(i, 10)))
        .filter(str => str.length >= 10)
    return sEachList.filter((str, i, arr) => new Set(arr.slice(i + 1)).has(str))
}
findRepeatedDnaSequences('AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT') //[ 'AAAAACCCCC', 'CCCCCAAAAA' ]
