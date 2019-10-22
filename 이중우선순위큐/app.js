// 문제 설명
// 이중 우선순위 큐는 다음 연산을 할 수 있는 자료구조를 말합니다.

// 명령어	수신 탑(높이)
// I 숫자	큐에 주어진 숫자를 삽입합니다.
// D 1	큐에서 최댓값을 삭제합니다.
// D -1	큐에서 최솟값을 삭제합니다.
// 이중 우선순위 큐가 할 연산 operations가 매개변수로 주어질 때, 모든 연산을 처리한 후 큐가 비어있으면 [0,0] 비어있지 않으면 [최댓값, 최솟값]을 return 하도록 solution 함수를 구현해주세요.

// 제한사항
// operations는 길이가 1 이상 1,000,000 이하인 문자열 배열입니다.
// operations의 원소는 큐가 수행할 연산을 나타냅니다.
// 원소는 “명령어 데이터” 형식으로 주어집니다.- 최댓값/최솟값을 삭제하는 연산에서 최댓값/최솟값이 둘 이상인 경우, 하나만 삭제합니다.
// 빈 큐에 데이터를 삭제하라는 연산이 주어질 경우, 해당 연산은 무시합니다.
// 입출력 예
// operations	return
// [I 16,D 1]	[0,0]
// [I 7,I 5,I -5,D -1]	[7,5]
// 입출력 예 설명
// 16을 삽입 후 최댓값을 삭제합니다. 비어있으므로 [0,0]을 반환합니다.
// 7,5,-5를 삽입 후 최솟값을 삭제합니다. 최대값 7, 최소값 5를 반환합니다.

const app = arg => {
    const charList = arg.map(v => {
        if (v.includes('I')) return 'I'
        else if (v.includes('D 1')) return 'D 1'
        else return 'D -1'
    })
    const numList = arg.map((v, i) => {
        if (charList[i] === 'I') return Number(v.replace(/I\s/g, ''))
        else if (charList[i] === 'D 1') return 'max'
        else return 'min'
    })
    let result = []

    charList.forEach((v, i) => {
        switch (v) {
            case 'I':
                result.push(numList[i])
                break
            case 'D 1':
                const maxNum = result
                    .slice()
                    .sort((a, b) => b - a)
                    .shift()
                result.splice(result.findIndex(n => n === maxNum), 1)
                break
            case 'D -1':
                const minNum = result
                    .slice()
                    .sort((a, b) => a - b)
                    .shift()
                result.splice(result.findIndex(n => n === minNum), 1)
                break
        }
    })
    if (!result.length) result.push(0, 0)

    return result
}
app(['I 16', 'D 1']) // [0, 0]
app(['I 7', 'I 5', 'I -5', 'D -1']) // [7,5]
