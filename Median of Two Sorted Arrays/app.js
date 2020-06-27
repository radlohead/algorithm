// There are two sorted arrays nums1 and nums2 of size m and n respectively.

// Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

// You may assume nums1 and nums2 cannot be both empty.

// Example 1:

// nums1 = [1, 3]
// nums2 = [2]

// The median is 2.0
// Example 2:

// nums1 = [1, 2]
// nums2 = [3, 4]

// The median is (2 + 3)/2 = 2.5

const app = (arr1, arr2) => {
    const arr = arr1.concat(arr2).sort((a, b) => a - b)

    if (arr.length % 2) return arr[Math.floor(arr.length / 2)]
    else {
        const arrLength = arr.length
        const halfFloorNum = Math.floor(arrLength / 2)

        return (
            arr
                .slice(halfFloorNum - 1, halfFloorNum + 1)
                .reduce((prev, curr) => prev + curr) / 2
        )
    }
}
app([1, 3], [2]) // 2
app([1, 2], [3, 4]) // 2.5
app([1, 2, 3, 4], [5, 6, 7, 8]) // 4.5
