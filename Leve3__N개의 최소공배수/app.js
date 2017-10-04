function nlcm(num) {
    let result = 0;
    const maxNum = num.reduce((p, c) => {
        return p*c;
    });
    var temp = [];
    for(let i=0; i<num.length; i++) {
        for(let j=2; j<=maxNum; j++) {
            temp.push(num[i] * j);
        }
    }
    for(let i=0; i<=maxNum; i++) {
        let count = 0;
        const tempResult = temp.map(v => {
            if(v === i) {
                count++;
                if(count === num.length) {
                    return result = v;
                }
            }
        });
        if(num.length === count) return result;
    }
    return result;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(nlcm([2,6,8,14]));