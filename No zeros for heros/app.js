
// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
//  960000 -> 96
//  1050 -> 105
//  -1050 -> -105 

const solution = (num) => {
    const numArr = num.toString().split('');
    const numReverse = numArr.reverse();
    const deleteIndex = numReverse.findIndex(v => v != 0);

    return numReverse.slice(deleteIndex, numArr.length).reverse().join('');
}

console.log(solution(1450));
console.log(solution(960000));
console.log(solution(1050));
console.log(solution(-1050));