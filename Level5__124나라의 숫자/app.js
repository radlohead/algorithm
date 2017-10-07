/*
124나라의 숫자
1,2,4 세 개의 숫자만 쓰는 124나라가 있습니다.
124나라에서 사용하는 숫자는 다음과 같이 변환됩니다.

10진법의 1 → 1
10진법의 2 → 2
10진법의 3 → 4
10진법의 4 → 11
10진법의 5 → 12
10진법의 6 → 14
10진법의 7 → 21
10진법의 수 N이 입력될 때, 124나라에서 쓰는 숫자로 변환하여 반환해주는
change124 함수를 완성해 보세요. 예를 들어 N = 10이면 “41”를 반환해주면 됩니다.
리턴 타입은 문자열입니다.
*/

function change124(n) {
    let answer = 0;
    const str = "412";
    const num = n % 3;
    let division = Math.floor(n / 3);
    if(division === 0) return str[num];
    else {
        if(num === 0) division -= 1;
        if(division === 3) return str[0] + str[num];
        return answer = change124(division) + str[num];
    }
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(change124(50));