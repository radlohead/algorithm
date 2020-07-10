// Given an array of strings, group anagrams together.

// Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]

const groupAnagrams = (strs) => {
    const strsSort = strs.slice().map((v) => v.split('').sort().join(''))
    const result = Array(1)
        .fill()
        .map((v) => [])

    result[0].push(strs[0])
    recursion(0, [[strsSort[0]]], strs.slice())
    return result.map((list) => list.sort())

    function recursion(idx, temp, arr) {
        if (idx === arr.length) return
        if (idx > 0) {
            const findIndex = temp.findIndex((list) =>
                list.includes(strsSort[idx])
            )
            if (findIndex > -1) {
                temp[findIndex].push(strsSort[idx])
                result[findIndex].push(arr[idx])
            } else {
                temp[temp.length] = [strsSort[idx]]
                result[result.length] = [arr[idx]]
            }
        }
        recursion(idx + 1, temp, arr)
    }
}
groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']) // [ [ 'ate', 'eat', 'tea' ], [ 'nat', 'tan' ], [ 'bat' ] ]
