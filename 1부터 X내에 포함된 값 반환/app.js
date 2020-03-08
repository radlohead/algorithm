// 두개의 숫자 X, Y를 받아서 1부터 X까지의 숫자중에 Y가 포함된 갯수를 A
// Y가 포함된 숫자를 모두 더한 값을 B, 그리고 모두 곱한 값을 C라고 한다면
// 세개의 값을 배열 형태로 반환하라. 만약 반환할 값이 없다면 [0, 0, 0]으로 반환하라

const solution = (X, Y) => {
    if (X <= 0) return false
    else if (Y < 0 || Y > 9) return false
    const arrX = Array(X)
        .fill()
        .map((s, i) => i + 1)
    const featureArr = arrX.filter(n => String(n).indexOf(Y) > -1)
    const A = () => featureArr.length
    const B = () => {
        if (!featureArr.length) return 0
        return featureArr.reduce((prev, curr) => prev + curr)
    }
    const C = () => {
        if (!featureArr.length) return 0
        return featureArr.reduce((prev, curr) => prev * curr)
    }
    return [A(), B(), C()]
}
solution(20, 0) //[ 2, 30, 200 ]
solution(5, 6) //[ 0, 0, 0 ]
solution(7, 6) //[ 1, 6, 6 ]
