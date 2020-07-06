// Given a collection of distinct integers, return all possible permutations.

// Example:

// Input: [1,2,3]
// Output:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]

const solution = (A) => {
    const result = []

    if (A.length === 1) return A

    A.forEach((v, i) => {
        const first = A[i]
        const rest = A.slice()
        rest.splice(i, 1)

        const combine = solution(rest)
        combine.forEach((v, j) => result.push([].concat(first, combine[j])))
    })

    return result
}

console.log(solution([1, 2, 3]))
// [
//     [ 1, 2, 3 ],
//     [ 1, 3, 2 ],
//     [ 2, 1, 3 ],
//     [ 2, 3, 1 ],
//     [ 3, 1, 2 ],
//     [ 3, 2, 1 ]
// ]
