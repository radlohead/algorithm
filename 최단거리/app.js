// 오름차순으로 정렬된 1차원의 점들이 주어져 있을 때,
// 그 중 거리가 가장 짧은 거리를 출력하는 프로그램을 작성하십시오.
// 예를 들어 [1, 5, 7, 8, 12, 16, 20]이 주어진다면 결과값은 1이 될 것입니다.
// 입력 첫 줄에 입력의 개수 다음 줄에 1차원 점들 공백으로 구분하여 입력( 1 이상 1,000,000 이하 )
// 출력 점들간 최소거리를 가진 한 쌍간 거리

// 입/출력 예시   : 공백 :
// 예시 1 입력 5 1 9 29 59 60 출력 1
// 예시 2 입력 10 20 90 130 450 923 1020 2943 3920 9431 11309 출력 40

const app = (num, arr) => {
    const sortArr = arr.sort((a, b) => a - b)
    let result = 0

    sortArr.forEach((n, i) => {
        const operator = Math.abs(n - sortArr[i + 1])

        if (i === 0) result = operator
        if (result > operator) result = operator
    })
    return result
}
app(5, [1, 9, 59, 29, 60])
