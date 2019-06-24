// 문제
// 구름이 집의 전기 요금을 구하는 프로그램을 작성하는 문제입니다. 가정용 전기 요금은 누진세가 붙어서 계산됩니다.
// 이 문제에서는 100kw 미만까지는 사용량*0.5%(만원)
// 100kw에서 200kw미만까지는 사용량*0.7%(만원)
// 200kw에서 300kw 미만 까지는 사용량*0.9%(만원)
// 300kw이상은 사용량*1%(만원) 이라고 가정하고 소숫점 둘째 자리까지 출력하시면 됩니다.
// 입력 0이상인전기 사용량(킬로와트) 출력 전기 요금(만원) 입/출력 예시 : 공백 :

// 예시 1 입력 100
// 출력 0.70
// 예시 2 입력 193
// 출력 135

const app = useKw => {
    const CONSTANTS = {
        NUM_100: 100,
        NUM_200: 200,
        NUM_300: 300
    }
    let result = null
    if (useKw < CONSTANTS.NUM_100) {
        result = useKw * 0.5
    }
    if (useKw >= CONSTANTS.NUM_100 && useKw < CONSTANTS.NUM_200) {
        result = useKw * 0.7
    }
    if (useKw >= CONSTANTS.NUM_200 && useKw < CONSTANTS.NUM_300) {
        result = useKw * 0.9
    }
    if (useKw >= CONSTANTS.NUM_300) {
        result = useKw * 1
    }
    result = result / 100
    return result.toFixed(2)
}
app(100)
app(193)
