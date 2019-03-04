// Reverse Integer

const solution = (num) => {
    let arr = num.toString().split('');
    let symbol = 0;

    if(/\-/.test(arr[0])) {
        symbol = arr[0];
        arr.shift();
    }
    return Number(`${symbol}${arr.reverse().join('')}`);
}

module.exports = solution;