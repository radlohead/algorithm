// 문제
// 1000 단위로 콤마(,)를 찍어 출력하는 프로그램

// 100 점 참여자 3 정답률 33.3% 1 0 이 프로그램은 사용자가 연속된 숫자를 입력하면
// 배열로 받아 화폐 단위를 표시하는 것처럼 1000 단위 마다 콤마(,)를 찍어서 출력하는 프로그램입니다.
// 1442335이라고 입력한 경우에 1,442,335와 같이 출력하는 프로그램이지요.

// 입력 1234567
// 출력 1,234,567
// 입력 9876543210
// 출력 9,876,543,210

const app = num => {
    const commaCount = Math.ceil(num.toString().length / 3)
    const reverseNum = num
        .toString()
        .split('')
        .reverse()
        .join('')
    let result = Array(commaCount)
        .fill()
        .map((v, i) => {
            const tempIndex = i + 1
            return `${reverseNum.substring(i * 3, tempIndex * 3)},`
        })
        .join('')
        .split('')
        .reverse()
        .join('')
    if (result[0] === ',') result = result.substr(1, result.length)
    return result
}
app(1234567) // 1,234,567
app(9876543210) // 9,876,543,210
