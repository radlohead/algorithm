// Write a method that takes a string as an argument and groups the number of time each character appears in the string as a hash sorted by the highest number of occurrences.
// The characters should be sorted alphabetically e.g:
// get_char_count("cba") => {1=>["a", "b", "c"]}
// get_char_count("Mississippi") => {4=>["i", "s"], 2=>["p"], 1=>["m"]}
// 문자열을 인자로 받아서 가장 중복이 많은 문자를 배열로 반환한다.

const solution = S => {
    const list = S.split('')
        .map(str => {
            const regexp = new RegExp(str, 'g')
            return [str, S.match(regexp).length]
        })
        .sort((a, b) => b[1] - a[1])
        .filter((v, i, arr) => {
            const maxNum = arr[0][1]
            return maxNum === v[1]
        })
    const listMap = new Map(list)
    const iter = listMap.entries()
    const result = []
    for (let [key] of iter) {
        result.push(key)
    }
    return result
}
solution('cba') // [ 'c', 'b', 'a' ]
solution('Mississippi') // [ 'i', 's' ]
