/*
Input: x = 1, y = 4

Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
*/
var hammingDistance = function (x, y) {
    return binaryNumber(x) + binaryNumber(y);
};
var binaryNumber = function (num) {
    var arr = num.toString(2).split('');
    var result = arr.reduce(function (p, c) {
        return parseInt(p) + parseInt(c);
    });
    return parseInt(result);
};
console.log(hammingDistance(1, 4));
