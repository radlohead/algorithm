function expressions(num) {
    let answer = 0;
    let temp = 0;

    Loop:
        for(let i=1; i<=num; i++){
            for(let j=i; j<=num; j++){
                temp += j;
                if(temp === num) {
                    answer += 1;
                    continue Loop;
                }
            }
            temp = 0;
        }
    return answer;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.2
console.log(expressions(15));