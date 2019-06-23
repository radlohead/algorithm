// 가장 빛나는 보석 다이아몬드를 출력하는 문제입니다.
// 입력한 숫자에 해당하는 줄 수에 맞게 다이아몬드 모양(마름모)을 출력하는 프로그램을 작성해보시오.
// *주의사항은 입력이 짝수일 경우와 홀수일 경우의 처리입니다.

// 입력 자연수 ( 최대 100 ) 출력 입력한 수에 맞는 라인 수를 가진 마름모 모양

// 7

//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *

const app = n => {
    const midIndex = Math.ceil(n / 2)
    let star = '*'
    let temp = ''
    let empty = Array(n)
        .fill()
        .map((v, i) => {
            if (i === 0) return ''
            temp += ' '
            return temp
        })

    for (let i = 0; i < n; i++) {
        if (i === 0) star = empty[midIndex - 1].concat(star)
        if (i !== 0 && i < midIndex) {
            star = star.trim()
            star += '**'
            star = empty[midIndex - (i + 1)].concat(star)
        }
        if (!(n % 2) && i === midIndex) console.log(star)
        if (i !== 0 && i >= midIndex) {
            star = star.trim()
            star = star.substr(2)
            star = empty[i + 1 - midIndex].concat(star)
        }
        console.log(star)
    }
}
app(7)
app(10)
