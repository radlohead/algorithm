// 자연수로 이루어진 배열이 있습니다.
// 원소들을 나열했을때 가장 큰 값을 만들수 있도록 배열을 정렬하시오

// input: [1,9,80,4]
// output: [9,80,4,1]  //98041

// input: [15,6,9]
// output: [9,6,15]  //9615

// input: [50,5,530]
// output: [5,530,50]  //553050

const solution = (arr) => {
    let result = [];
    let temp = [];

    const swap = (arr, i, j) => {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    const perm = (arr, depth, n) => {
        if(depth === n){
            result.push(Number(arr.join('')));
            return;
        }
            
        for(let i = depth; i<n; i++){
            swap(arr, i, depth);
            perm(arr, depth + 1, n);
            swap(arr, i, depth);
        }
    }

    perm(arr, 0, arr.length);

    const resultSort = result.sort((a, b) => b - a)[0];
    arr
        .sort((a, b) => b - a)
        .forEach(v => {
            const resultSortToStr = resultSort.toString();
            const eleToStr = v.toString();
            const index = resultSortToStr.indexOf(eleToStr);

            result.push(resultSortToStr.substr(index, eleToStr.length));
        });
    result.forEach(v => {
        const resultSortToStr = resultSort.toString();
        const index = resultSortToStr.indexOf(v);

        temp[index] = resultSortToStr.substr(index, v.length);
    });
    result = [...temp]
        .filter(v => 'string' === typeof v )
        .map(v => Number(v));

    return result;
}

module.exports = solution;