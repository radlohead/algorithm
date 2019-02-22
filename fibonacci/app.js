const solution = (num) => {
    if (num <= 1) return num;
    return solution(num-1) + solution(num-2);
}
console.log(solution(10));