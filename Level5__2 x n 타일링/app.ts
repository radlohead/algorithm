const tiling: Function = (n: number): number => {
    let result: number = 0;
    let arr: Array<number> = [1, 1];
    for(let i: number=2; i<=n; i++){
        arr[i] = (arr[i-1] + arr[i-2]) % 100000;
    }
    result = arr[arr.length-1];
    return result;
};
// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(tiling(524));  //3650