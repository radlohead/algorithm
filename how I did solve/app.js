// 주어진 수만큼 배열을 오른쪽으로 이동
// 주어진 값이 A = [3, 8, 9, 7, 6], K = 3 일 경우 결과는 [9, 7, 6, 3, 8]

const solution = (A, K) => {
    const temp = A.length - K
    return A.slice(temp, A.length).concat(A.slice(0, temp))
}
solution([3, 8, 9, 7, 6], 3) // [ 9, 7, 6, 3, 8 ]
solution([3, 8, 9, 7, 6, 2], 3) //[ 7, 6, 2, 3, 8, 9 ]
