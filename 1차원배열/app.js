// [1,[1,2,[1,2,3]]] => [1,1,3,1,2,3];

const solution = (arg) => {
    return arg.reduce((a, v) => {
        return Array.isArray(v) ? a.concat(solution(v)) : a.concat(v)
    },[]);
}
console.log(solution([1,[1,2,[1,2,3]]]));