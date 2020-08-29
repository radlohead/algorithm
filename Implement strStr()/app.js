// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1

const strStr = function (haystack, needle) {
    if (!haystack || !needle) return -1
    return haystack.indexOf(needle)
}
strStr('hello', 'll') // 2
strStr('aaaaa', 'bba') // -1
