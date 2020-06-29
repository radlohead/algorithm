// Check if it is a vowel(a, e, i, o, u,) on the n position in a string (the first argument). Don't forget about uppercase.

// A few cases:

// {
// checkVowel('cat', 1)  ->   true // 'a' is a vowel
// checkVowel('cat', 0)  ->   false // 'c' is not a vowel
// checkVowel('cat', 4)  ->   false // this position doesn't exist
// }

const checkVowel = (S, N) => ['a', 'e', 'i', 'o', 'u'].includes(S.substr(N, 1))
checkVowel('cat', 1) // true
checkVowel('cat', 0) //false
checkVowel('cat', 4) //false
