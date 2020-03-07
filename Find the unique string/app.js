// There is an array of strings. All strings contains similar letters except one. Try to find it!

// findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
// findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
// Strings may contain spaces. Spaces is not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

// It’s guaranteed that array contains more than 3 strings.

const log = console.log
const solution = arg => {
    const sortList = arg.slice().sort((a, b) => a.length - b.length)
    return sortList
        .map((char, i, list) => {
            const tempList = list.slice()
            tempList.splice(i, 1)
            const isDuplicateCheck = tempList.some(s => {
                return s.split('').some(childS => char.indexOf(childS) > -1)
            })
            if (!isDuplicateCheck) return char
        })
        .filter(char => char)
        .join('')
}
log(solution(['Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a'])) // 'BbBb'
log(solution(['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba'])) // 'foo'
