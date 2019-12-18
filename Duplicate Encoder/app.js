// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
// Notes

// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

const duplicateEncode = word => {
    const NEW_STRING = '('
    const DUPLICATE_STRING = ')'

    const wordList = word.split('')
    const duplicateWordList = Array.from(
        new Set(wordList.filter((word, i) => wordList.indexOf(word) !== i))
    )
    const result = wordList
        .map(word => {
            return duplicateWordList.includes(word)
                ? NEW_STRING
                : DUPLICATE_STRING
        })
        .join('')

    return result
}
duplicateEncode('din') // (((
duplicateEncode('recede') // ()()()
duplicateEncode('Success') // (())())
duplicateEncode('(( @') // ))((
