"use strict";
// 0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.
// 예를 들어, 주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를 
// 만들 수 있고, 이중 가장 큰 수는 6210입니다.
// 0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때, 
// 순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 return 하도록 solution 함수를 작성해주세요.
// 제한 사항
// numbers의 길이는 1 이상 100,000 이하입니다.
// numbers의 원소는 0 이상 1,000 이하입니다.
// 정답이 너무 클 수 있으니 문자열로 바꾸어 return 합니다.
// 입출력 예
// numbers	return
// [6, 10, 2]	6210
// [3, 30, 34, 5, 9]	9534330
/*
배열 모든조합
배열의 길이가 3개일때 (2개씩 총 6개)
3,2,1 2*1 = 2

0,1,2
0,2,1
1,0,2
1,2,0
2,0,1
2,1,0

배열의 길이가 4개일때 (6개씩 총 24개)
4,3,2,1 3*2*1 = 6

0,1,2,3
0,1,3,2
0,2,1,3
0,2,3,1
0,3,1,2
0,3,2,1
1,0,2,3

배열의 길이가 5개일때 (24개씩 총 120개)
5,4,3,2,1 4*3*2*1 = 24

0,1,2,3,4
0,1,2,4,3
0,1,3,2,4
0,1,3,4,2
0,1,4,2,3
0,1,4,3,2
0,2,1,3,4
0,2,1,4,3
0,2,3,1,4
0,2,3,4,1
0,2,4,1,3
0,2,4,3,1
*/
function solution(arg) {
    var arr = [];
    var depth = 0;
    var n = arg.length;
    function swap(arg, i, j) {
        var temp = arg[i];
        arg[i] = arg[j];
        arg[j] = temp;
    }
    function func(arg, depth, n) {
        if (depth === n) {
            arr.push(Number(arg.join("")));
            return;
        }
        for (var i = depth; i < n; i++) {
            swap(arg, i, depth);
            func(arg, depth + 1, n);
            swap(arg, i, depth);
        }
    }
    func(arg, depth, n);
    arr.sort(function (a, b) {
        return a - b;
    });
    return arr[arr.length - 1].toString();
}
var numbers = [3, 30, 34, 5, 9];
solution(numbers);
//# sourceMappingURL=app.js.map