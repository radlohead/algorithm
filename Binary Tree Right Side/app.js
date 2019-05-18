const app = arr => {
    let temp = 2
    const rightIndex = arr.slice(0, arr.length / 2).map((v, i) => {
        if (i === 0) return 0
        if (i === 1) return temp
        return temp + (temp *= 2)
    })
    const rightNumList = arr
        .map((v, i) => arr[rightIndex[i]])
        .filter(v => v !== undefined)

    return rightNumList
}

app([1, 2, 3, null, 5, null, 4]) // [1, 3, 4]
