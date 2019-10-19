// 012
// 021
// 102
// 120
// 201
// 210

const app = arr => {
    const arrLength = arr.length
    const result = []
    let index = 0

    const createList = (i, j) => {
        result[index].push(i, j, restNum([i, j]))
    }
    const restNum = arr => {
        return Array(arrLength)
            .fill()
            .map((n, i) => i++)
            .filter(n => !arr.includes(n))[0]
    }

    arr.forEach((n, i, arr) => {
        arr.forEach((n2, j) => {
            if (i === j) return
            if (!result[index]) result[index] = []
            createList(i, j)
            ++index
        })
    })

    return result
}

app([[0, 3], [1, 9], [2, 6]])
// [
//     [ 0, 1, 2 ],
//     [ 0, 2, 1 ],
//     [ 1, 0, 2 ],
//     [ 1, 2, 0 ],
//     [ 2, 0, 1 ],
//     [ 2, 1, 0 ]
//   ]
