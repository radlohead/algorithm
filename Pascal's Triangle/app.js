// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:
// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

// Example 2:
// Input: numRows = 1
// Output: [[1]]

const generate = (numRows) => {
    const createArr = Array(numRows)
        .fill()
        .map((d) => [1])
    const result = createArr.map((d, i, arr) => {
        if (i === 1) {
            d.push(1)
        }
        if (i >= 2) {
            const beforeValues = arr[i - 1].map((v, j, beforeArr) => {
                if (j === beforeArr.length - 1) return v
                return v + beforeArr[j + 1]
            })
            d.push(...beforeValues)
        }

        return d
    })

    return result
}

generate(5) // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
