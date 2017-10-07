/* 반복되지 않는 첫번째 문자 */
var noOverlap = function (str) {
    var result = str;
    var arr = str.split('');
    arr.map(function (v, i, arr) {
        arr.filter(function (v2, i2, arr2) {
            if (i === i2)
                return false;
            else if (v === v2) {
                result = result.split(v2).join('');
            }
        });
    });
    return result[0];
};
console.log(noOverlap('total'));
console.log(noOverlap('teetar'));
