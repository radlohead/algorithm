function nextBigNumber(n){
    var answer = n.toString(2);
    var currentValue = 0;
    var nextValue = 0;
    var result = 0;
    answer.split('').map(v=> {
        if(v === "1") currentValue++;
    });
    for(var i=1; currentValue !== nextValue; i++){
        for(var j=0; j <= answer.length; j++){
            if((n+i).toString(2).split('')[j] === "1") nextValue++;
            if(j === answer.length && currentValue !== nextValue) nextValue=0;
            if(j === answer.length && currentValue === nextValue) result = (n+i).toString(10)*1;
        }
    }

    return result;
}

//아래 코드는 테스트를 위한 코드입니다.
console.log(nextBigNumber(78));