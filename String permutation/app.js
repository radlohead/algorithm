/*
    input: abc
    output: [abc, acb, bac, bca, cab, cba]
*/

const solution = (S) => {
    const loop = (A) => {
        const result = []

        if (A.length === 1) return A

        A.forEach((v, i) => {
            const first = A[i]
            const rest = A.slice()
            rest.splice(i, 1)

            const combine = loop(rest)
            combine.forEach((v, j) => result.push([].concat(first, combine[j])))
        })

        return result
    }
    return loop(S.split(''))
}
console.log(solution('abc'))
// [
//     [ 'a', 'b', 'c' ],
//     [ 'a', 'c', 'b' ],
//     [ 'b', 'a', 'c' ],
//     [ 'b', 'c', 'a' ],
//     [ 'c', 'a', 'b' ],
//     [ 'c', 'b', 'a' ]
// ]
