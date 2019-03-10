// 정수 배열과 정수 k가 주어지면 모든 원소를 k칸씩 앞으로 옮기시오.

// input: [1,2,3,4,5] k=2
// output: [3,4,5,1,2]

// input: [0,1,2,3,4] k=1
// output: [1,2,3,4,0]

const solution = (arr, k) => {
    let doubleArr = arr.concat(arr);
    return doubleArr.slice(k, arr.length + k);
}

module.exports = solution;