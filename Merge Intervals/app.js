// Given a collection of intervals, merge all overlapping intervals.

// Example 1:

// Input: [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
// Example 2:

// Input: [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

const merge = (intervals) => {
    if (intervals.length <= 1) return intervals
    intervals.sort((a, b) => a[0] - b[0])
    const intervalsLen = intervals.slice().length
    const result = []

    recursion(0, [])
    return result

    function recursion(idx, temp) {
        if (idx === intervalsLen || !intervals.length) {
            result.push(...temp)
            return
        }
        if (!temp.length) temp.push(...intervals.splice(0, 1))
        if (
            temp[temp.length - 1][0] >= intervals[0][0] ||
            temp[temp.length - 1][1] >= intervals[0][1] ||
            temp[temp.length - 1][1] >= intervals[0][0]
        ) {
            const min = Math.min(temp[temp.length - 1][0], intervals[0][0])
            const max = Math.max(temp[temp.length - 1][1], intervals[0][1])
            temp[temp.length - 1] = [min, max]
        } else {
            temp.push(...intervals.slice(0, 1))
        }
        intervals.splice(0, 1)
        recursion(idx + 1, temp)
    }
}

// merge([
//     [2, 3],
//     [4, 5],
//     [6, 7],
//     [8, 9],
//     [1, 10],
// ]) // [[1, 10]]

// merge([
//     [1, 4],
//     [0, 2],
//     [3, 5],
// ])

// merge([
//     [1, 4],
//     [0, 0],
// ]) // [ [ 0, 0 ], [ 1, 4 ] ]

// merge([
//     [1, 4],
//     [0, 1],
// ]) // [[0, 4]]

// merge([
//     [1, 4],
//     [0, 4],
// ]) // [[0, 4]]

// merge([
//     [1, 4],
//     [5, 6],
// ]) // [[1,4]]

// merge([
//     [1, 3],
//     [2, 6],
//     [8, 10],
//     [15, 18],
// ]) // [ [ 1, 6 ], [ [ 8, 10 ] ], [ [ 15, 18 ] ] ]

// merge([
//     [1, 4],
//     [4, 5],
// ]) // [ [ 1, 5 ] ]
