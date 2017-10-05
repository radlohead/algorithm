function jumpCase(num) {
    var answer = 0;
    var fibo1 = 1;
    var fibo2 = 1;
    for(var i=1; i<num; i++){
        answer = fibo1 + fibo2;
        fibo1 = fibo2;
        fibo2 = answer;
    }

    return answer;
}

//아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(jumpCase(6));