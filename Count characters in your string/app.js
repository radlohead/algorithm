// The main idea is to count all the occurring characters(UTF-8) in string. If you have string like this aba then the result should be { 'a': 2, 'b': 1 }
// What if the string is empty ? Then the result should be empty object literal { }

const solution = S => {
    const duplicateList = S.split('').map(str => {
        const regexp = new RegExp(str, 'g')
        return [str, S.match(regexp).length]
    })
    let result = {}
    new Map(duplicateList).forEach((value, key) => {
        result = Object.assign(result, { [key]: value })
    })
    return result
}
solution('aba') // { a: 2, b: 1 }
