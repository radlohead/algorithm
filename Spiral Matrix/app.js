// Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

// Example 1:

// Input:
// [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ]
// ]
// Output: [1,2,3,6,9,8,7,4,5]
// Example 2:

// Input:
// [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9,10,11,12]
// ]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

const spiralOrder = (matrix) => {
    if (!matrix.length) return []
    const DIRECTION = {
        RIGHT: 'right',
        DOWN: 'down',
        LEFT: 'left',
        UP: 'up',
    }
    const xLen = matrix[0].length
    const yLen = matrix.length
    const matrixClone = matrix.slice()
    const result = []
    let currentDirection = DIRECTION.UP

    for (let i = 0; i < xLen + yLen; ++i) {
        if (!matrixClone.length) return result
        if (DIRECTION.UP === currentDirection) {
            currentDirection = DIRECTION.RIGHT
            result.push(...matrixClone.shift())
        }
        if (DIRECTION.RIGHT === currentDirection) {
            currentDirection = DIRECTION.DOWN
            const getNums = matrixClone.map((v) => v[v.length - 1])
            result.push(...getNums)
            matrixClone.forEach((v) => {
                v.pop()
            })
        }
        if (DIRECTION.DOWN === currentDirection) {
            if (!matrixClone.length)
                return result.filter((v) => v !== undefined)
            currentDirection = DIRECTION.LEFT
            result.push(...matrixClone[matrixClone.length - 1].reverse())
            matrixClone.pop()
        }
        if (DIRECTION.LEFT === currentDirection) {
            if (!matrixClone.length)
                return result.filter((v) => v !== undefined)
            currentDirection = DIRECTION.UP
            const getNums = matrixClone.reverse().map((v) => v[0])
            result.push(...getNums)
            matrixClone.reverse().forEach((v) => v.shift())
        }
    }
}
spiralOrder([
    [2, 5],
    [8, 4],
    [0, -1],
]) // [ 2, 5, 4, -1, 0, 8 ]

spiralOrder([[7], [9], [6]]) // [7,9,6]
spiralOrder([
    [2, 5],
    [8, 4],
    [0, -1],
]) // [ 2, 5, 4, -1, 0, 8 ]

spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
])
// [
//     1,  2,  3,  4, 8, 12,
//    16, 15, 14, 13, 9,  5,
//     6,  7, 11, 10
// ]

spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
])
// [
//     1, 2, 3, 6, 9,
//     8, 7, 4, 5
// ]
spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
])
// [
//     1,  2,  3, 4, 8,
//    12, 11, 10, 9, 5,
//     6,  7
// ]
