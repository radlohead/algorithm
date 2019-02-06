// 설명
// It should look like this:
// Sam Harris => S.H
// Patrick Feeney => P.F

function solution(arg) {
    return arg.replace(/[a-z,0-9]/g, '').replace(/\s/g, '.');
}

solution('Sam Harris');
solution('Patrick Feeney');