// 배낭 문제는 무게 제한이 50인 배낭에 다음과 같은 세 개의 물건을 넣는 문제입니다. 넣은 물건들의 가치(v) 합이 최대가 되면 됩니다. 문제는 세 물건의 무게(w)를 합치면 60이라 다 넣지는 못한다는 겁니다.

// 이 문제 이름이 0/1인 이유는 물건을 쪼개서 넣지는 못하고, 선택지가 통째로 넣거나 아예 안 넣거나 두 개밖에 없기 때문입니다.

// [1, 60, 10, 2, 100, 20, 3, 120, 30]

const solution = (arr, max) => {
    const combineArr = []
    const combine = (arr, temp, index, n) => {
        for (let i = index; i < arr.length; i++) {
            temp.push(arr[i])
            if (temp.length <= n) {
                combineArr.push(temp.slice())
            }
            combine(arr, temp, i + 1, n)
            temp.pop()
        }
    }
    combine(arr.slice(), [], 0, 3)

    const result = combineArr
        .map((arr) => {
            const sum = arr.reduce((prev, curr) => prev + curr)
            if (sum <= max) {
                return {
                    arr,
                    total: sum,
                }
            }
        })
        .filter((arr) => arr)
        .sort((a, b) => b.total - a.total)[0]
    return result.arr
}
solution([1, 60, 10, 2, 100, 20, 3, 120, 30], 50) // [ 20, 30 ]
