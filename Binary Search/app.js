const solution = (arr, val) => {
    let lowerBound = 0
    let upperBound = arr.length - 1

    while (lowerBound <= upperBound) {
        let midPoint = Math.ceil((upperBound + lowerBound) / 2)
        let valueAtMidPoint = arr[midPoint]

        if (val < valueAtMidPoint) upperBound = midPoint - 1
        else if (val > valueAtMidPoint) lowerBound = midPoint + 1
        else if (val === valueAtMidPoint) return midPoint
    }
}

solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 6)
