// 8자리의 숫자를 2자리의 숫자사이에 공백을 포함해서 받는다.
// 처음 2자리의 숫자는 55, 56이다
// 처음과 끝에는 공백이 올 수 없고 숫자를 괄호로 감쌀수도 있다.
// 2자리의 숫자사이에 공백이 올 경우 해당 숫자는 개별로 분리한다.

const solution = S => {
    const SLength = S.length
    if (
        S.substring(0, 1) === ' ' ||
        S.substring(SLength - 1, SLength) === ' '
    ) {
        return false
    } else if (S.indexOf('(') > -1 || S.indexOf(')') > -1) {
        S = S.replace(/\(/g, '').replace(/\)/g, '')
    } else if (S.split(' ')[0] !== '55' && S.split(' ')[0] !== '56') {
        return false
    }
    S = S.split(' ').join(' ')
    return S
}

solution('56 84 52 23') //56 84 52 23
solution(' 56 84 52 23') // false
solution(' 56 84 52 23 ') //false
solution('56 (84) 52 23') //56 84 52 23
solution('(5 6) 84 65 52') //5 6 84 65 52
