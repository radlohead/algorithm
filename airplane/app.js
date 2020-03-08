// 비행기 내에 4인 가족을 태우려고 한다. 첫번째 인자는 좌석의 행렬 두번째는 예약한 좌석을 받는다.
// 1행렬당 10개의 좌석이 있다고 한다면
// ㅁㅁㅁ ㅁㅁㅁㅁ ㅁㅁㅁ 좌석 통로사이에 가족 구성원중 2명씩은 연속으로 앉아야 하며 결과적으로 4명의 구성원은
// 연속으로 앉아야 한다.S
// xㅁㅁ ㅁㅁxx xxx, xxx ㅁㅁㅁㅁ xxxx 이런형태로만 앉을수 있으며 4인 가족이 모두 앉을 경우 1을 반환한다고 하면
// 총 몇번을 앉을수 있는지 반환하라

const solution = (N, S) => {
    const ROW_SYMBOL = {
        B: 0,
        C: 1,
        D: 2,
        E: 3,
        F: 4,
        G: 5,
        H: 6,
        J: 7
    }
    const reserveArr = () => {
        if (!S) {
            return false
        } else {
            return S.split(' ')
                .map(s => {
                    if (s.indexOf('A') > -1 || s.indexOf('K') > -1) return
                    return [s.substring(0, 1), s.substring(1, 2)]
                })
                .filter(list => list)
        }
    }
    let arr = Array.from(Array(N)).map(() => Array(8).fill(''))
    let count = 0
    if (reserveArr()) {
        reserveArr().forEach(
            list => (arr[list[0] - 1][ROW_SYMBOL[list[1]]] = 'X')
        )
        arr.forEach(list => {
            if (!list[0] && !list[1] && !list[2] && !list[3]) count += 1
            if (!list[4] && !list[5] && !list[6] && !list[7]) count += 1
            else if (!list[2] && !list[3] && !list[4] && !list[5]) count += 1
        })
    } else {
        count = N * 2
    }
    return count
}

solution(2, '1A 2F 1C') // 2
solution(2, '1A 1C') // 3
solution(2, '') // 4
