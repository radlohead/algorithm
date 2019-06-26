// 문제
// Brute - Force Attack은 암호를 풀기 위해 모든 암호를 하나하나 입력하여 시도하는 방법입니다.
// 이 방법은 시스템이 허용하는 암호의 수가 제한되어 있다면 유용할 수도 있습니다.
// 예를 들어 비밀번호가 항상 4자리 10진수로 구성되는 휴대전화가 있다고 하면 이 것은 10000개의 암호 조합만 사용 가능합니다.
// 최소 a자리에서 최대 b자리의 암호를 사용하며, 각 자리에는 n 종류의 글자 중 하나가 들어갈 수 있다고 할 때
// 이 시스템에서 사용할 수 있는 암호 조합의 수를 계산하는 프로그램을 작성하십시오.
// 입력 a, b, n이 공백으로 구분되어 순서대로 입력된다( 1 ≤ a ≤ 1000 )( 1 ≤ b ≤ 1000 )( 1 ≤ n ≤ 128 ).
// 출력 시스템에서 사용할 수 있는 암호 조합의 수

// 입력 4 6 10
// 출력 1110000

// 입력 4 4 10
// 출력 10000

const app = (a, b, n) => {
    const nArr = Array(b).fill(n)
    const bSquareCount = nArr.reduce((p, c) => p * c)
    const betweenCipherCount = b - a
    const isSameCipher = a === b
    let bSquareCountClone = bSquareCount

    if (isSameCipher) return bSquareCount
    return (
        Array(betweenCipherCount)
            .fill()
            .map((v, i) => {
                return (bSquareCountClone /= 10)
            })
            .reduce((p, c) => p + c) + bSquareCount
    )
}
app(4, 6, 10)
app(4, 4, 10)
