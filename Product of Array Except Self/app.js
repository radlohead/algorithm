const app = arr => {
    const multiplyNum = arr.reduce((p, c) => p * c)
    return arr.map((v, i) => multiplyNum / arr[i])
}

app([1, 2, 3, 4]) // [ 24, 12, 8, 6 ]
