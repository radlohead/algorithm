// 문제
// 소규모 공장을 운영하고 있는 지수는 최근 자동화 로봇 한 대를 구매했다.
// 로봇은 매일 정비와 가동 준비가 필요해서 하루 8시간 동안만 작업을 처리할 수 있다.
// 지수는 번거로운 반복 작업을 모두 로봇으로 대체하려고 한다. 지수는 로봇이 기한 내에 모든 작업을 처리할 수 있을 지 궁금해졌다.
// 지수는 처리해야 할 N개의 작업들에 대해 다음과 같은 정보들을 알고 있다.
// Si : 각 작업의 시작 가능 날짜
// Ei : 각 작업의 마감 기한 날짜
// Wi : 각 작업에 소요되는 시간  로봇은 1번째 날 부터 바로 작업을 시작할 수 있으며 하루에 정확히 8시간의 작업을 할 수 있다.
// 동시에 하나의 작업만을 수행할 수 있으며, 작업 도중 다른 작업으로 전환하는 것은 자유롭다.
// 모든 작업은 시작 가능 날짜에서부터 부터 마감 기한 날짜까지의 기간내에만 작업을 할 수 있다.
// 시작 당일이나 마감 당일에도 물론 작업을 할 수 있다.
// N개의 작업들에 대한 정보가 주어졌을 때 모든 작업을 마감 기한 내에 완료할 수 있는지 여부를 판단하는 프로그램을 작성하시오.

// 입력 형식
// 첫 줄에는 테스트케이스의 수를 나타내는 1 이상 5 이하의 자연수 T가 주어진다.
// 이후 총 T개의 테스트케이스에 대한 입력이 차례로 주어진다.
// 각 테스트케이스의 첫 줄에는 처리해야 할 작업의 수를 나타내는 자연수 N이 주어진다.
// N은 1 이상 20만 이하의 자연수다.
// 이후 총 N줄에 걸쳐 작업들에 대한 정보가 한 줄에 하나씩 주어진다.
// 작업에 대한 정보는 Si Ei Wi 형식으로 공백으로 구분된 세 개의 자연수로 주어진다.
// Si, Ei, Wi는 모두 1 이상 10억 이하의 자연수다.
// Si는 항상 Ei보다 작거나 같은 값을 가진다.

// 출력 형식
// 각 테스트케이스별로 정답을 한 줄에 출력한다.
// 입력으로 주어진 N개의 작업을 모두 기한 내에 처리할 수 있다면 Yes를 출력한다.
// 그렇지 않다면 No를 출력한다.

// 입력
// 3
// 3
// 1 3 8
// 2 2 8
// 3 3 8
// 4
// 1 2 10
// 2 4 20
// 1 3 5
// 3 4 5
// 5
// 1 5 16
// 2 4 4
// 3 4 16
// 1 2 4
// 4 6 4

// 출력
// Yes
// No
// Yes

const app = (arrCount, arr) => {
    const endSort = arr.slice().sort((a, b) => a[1] - b[1])
    const CONSTANTS = {
        TIME: {
            TOTAL_TIME: arr.map(v => v[2]).reduce((p, c) => p + c),
            TODAY_MAX_TIME: 8
        },
        OUTPUT: {
            YES: 'YES',
            NO: 'NO'
        }
    }

    if (
        CONSTANTS.TIME.TOTAL_TIME >
        CONSTANTS.TIME.TODAY_MAX_TIME * endSort[arr.length - 1][1]
    ) {
        return CONSTANTS.OUTPUT.NO
    }
    let temp = Array(endSort[arr.length - 1][1]).fill(null)
    endSort.forEach(v => {
        if (!temp[v[1] - 1]) temp[v[1] - 1] = []
        temp[v[1] - 1].push(v[2])
    })
    const totalTimeArr = temp.map(v => {
        if (!v) return 0
        return v.reduce((p, c) => p + c)
    })
    const overTimeArr = totalTimeArr.map(v => {
        if (v > 8) return v - 8
        else return 0
    })
    let overTimeCount = overTimeArr.reduce((p, c) => p + c)
    const result = totalTimeArr
        .map((v, i) => v - overTimeArr[i])
        .map(v => {
            if (v < 8) {
                overTimeCount -= v
                return v + overTimeCount <= 8 ? v + overTimeCount : 8
            } else return v
        })
        .every(v => v <= 8)
    return result ? CONSTANTS.OUTPUT.YES : CONSTANTS.OUTPUT.NO
}

app(3, [[1, 3, 8], [2, 2, 8], [3, 3, 8]])
app(4, [[1, 2, 10], [2, 4, 20], [1, 3, 5], [3, 4, 5]])
app(5, [[1, 5, 16], [2, 4, 4], [3, 4, 16], [1, 2, 4], [4, 6, 4]])
