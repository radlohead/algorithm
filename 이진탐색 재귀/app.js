// 이진탐색 재귀로풀기
// 배열에서 target에 해당하는 인덱스 값 찾기 없다면 -1을 반환

const log = console.log;
const bsRecur = (arg, first, last, target) => {
    let mid = parseInt((first + last) / 2);

    if(first > last) return -1;
    if(arg[mid] === target) return mid;
    else if(target < arg[mid]) return bsRecur(arg, first, mid - 1, target);
    else return bsRecur(arg, mid + 1, last, target);
}

const solution = (arg, target) => {
    let index = bsRecur(arg, 0, arg.length - 1, target);

    if(index === -1) return false;
    else return index;
}

module.exports = solution;