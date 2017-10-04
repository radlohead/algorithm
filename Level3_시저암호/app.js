function caesar(s, n) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var str = s;
    var result = '';
    Inner:
        for(var i=0; i<str.length; i++){
            for(var j=0; j<=alphabet.length; j++){
                if(str[i] === alphabet[j]){
                    let temp = j+n;
                    if(temp >= alphabet.length){
                        while(temp >= alphabet.length) {
                            temp -= alphabet.length;

                        }
                    }
                    result += alphabet[temp];
                }
                if(str[i] === Alphabet[j]){
                    let temp = j+n;
                    if(temp >= Alphabet.length){
                        while(temp >= alphabet.length){
                            temp -= Alphabet.length;
                        }
                    }
                    result += Alphabet[temp];
                }
                if(i === str.length && j === alphabet.length) return result;
                if(str[i] === ' '){
                    result += ' ';
                    continue Inner;
                }
            }
        }
    return result.replace(/undefined/g,'');
}

// 실행을 위한 테스트코드입니다.
console.log(caesar("a B z", 4));