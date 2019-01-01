// 직사각형 별찍기

// 문제 설명

// 이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
// 별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.

// 제한 조건
// n과 m은 각각 1000 이하인 자연수입니다.

// 예시
// 입력
// 5 3

// 출력
// *****
// *****
// *****

function solution(n: number, m: number): string {
    let result: string = '';

    while(m-- > 0) {
        while(n-- > 0) {
            result += '*';
        }
        n = 5;
        if (m !== 0) { result += '\n'; }
    }
    return result;
}

solution(5, 3);