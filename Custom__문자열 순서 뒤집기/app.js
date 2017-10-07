// 문자열 순서 뒤집기
var stringTurn = function (str) {
    var result = '';
    for (var i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
};
console.log(stringTurn('there is no try'));
