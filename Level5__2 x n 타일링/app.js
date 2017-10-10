var tiling = function (n) {
    var result = 0;
    var arr = [1, 1];
    for (var i = 2; i <= n; i++) {
        console.log(arr[i - 1] + arr[i - 2], arr[i - 1], arr[i - 2]);
        arr[i] = (arr[i - 1] + arr[i - 2]) % 100000;
    }
    result = arr[arr.length - 1];
    return result;
};
// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(tiling(5)); //3650
