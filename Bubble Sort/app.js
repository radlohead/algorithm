const bubbleSort = arr => {
    let unsortedUntilIndex = arr.slice()
    let sorted = false

    while (!sorted) {
        sorted = true
        for (let i in unsortedUntilIndex) {
            i = Number(i)
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i]
                sorted = false
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
            }
        }
        unsortedUntilIndex.pop()
    }
}

let arr = [60, 30, 20, 50, 40]
bubbleSort(arr)
