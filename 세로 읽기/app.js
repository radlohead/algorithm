// 문제
// 구름이는 조선시대에서 타임머신을 타고 현대로 왔습니다. 구름이는 모든 글을 조선시대 방식으로 읽습니다.
// 가로 세로 글자 수가 같은 경우에 원래의 글을 구름이가 읽은 대로 출력하는 프로그램을 작성하십시오.
// 세로 읽기 예) 한글 세로쓰기 가로쓰기 입력 첫 줄에 N*N 정사각형 배열의 N (최대 20)
// 다음 줄 부터 N*N 정사각형 형태의 문자 혹은 숫자 입력 (입력 예시 참고) 출력 세로 읽기 순서대로 출력

// 입력 5 a b c d e f g h i j k l m n o p q r s t u v w x y
// 출력 ejotydinsxchmrwbglqvafkpu

// 입력 2 가 세 로 로
// 출력 세로가로

const app = (n, arr) => {
    return Array(n)
        .fill()
        .map((v, i) => arr.map(v => v.reverse()).map((char, j) => char[i]))
        .join(',')
        .replace(/,/g, '')
}
app(5, [
    ['a', 'b', 'c', 'd', 'e'],
    ['f', 'g', 'h', 'i', 'j'],
    ['k', 'l', 'm', 'n', 'o'],
    ['p', 'q', 'r', 's', 't'],
    ['u', 'v', 'w', 'x', 'y']
]) // ejotydinsxchmrwbglqvafkpu
app(2, [['가', '세'], ['로', '로 ']]) // 세로 가로
