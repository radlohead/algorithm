// 1로 만들기

// 문제
// 정수 X에 사용할 수 있는 연산은 다음과 같이 세 가지 이다.

// X가 3으로 나누어 떨어지면, 3으로 나눈다.
// X가 2로 나누어 떨어지면, 2로 나눈다.
// 1을 뺀다.
// 정수 N이 주어졌을 때, 위와 같은 연산 세 개를 적절히 사용해서 1을 만들려고 한다. 연산을 사용하는 횟수의 최솟값을 출력하시오.

// 입력
// 첫째 줄에 1보다 크거나 같고, 106보다 작거나 같은 정수 N이 주어진다.

// 출력
// 첫째 줄에 연산을 하는 횟수의 최솟값을 출력한다.

// 예제 입력 -> 출력
// 2 -> 1
// 10 -> 3
// 10의 경우는 10 -> 9 -> 3 -> 1 처음에 -1을 빼면 3번의 연산으로 1이 됨

// 매번 로직 처음에 -1을 빼는 경우의 수를 계산해서 각각 다른 결과값을  경우의 수만큼 구해야 한다.

const app = num => {
    let count = 0
    let isTerms = false

    const termsWhile = (num, isTerms) => {
        let temp = 0
        if (isTerms) {
            --num
            ++temp
        }
        while (num > 1) {
            if (num % 3 === 0) {
                num = num / 3
                ++temp
            } else if (num % 2 === 0) {
                num = num / 2
                ++temp
            } else {
                --num
                ++temp
            }
        }

        if (count === 0) count = temp
        if (count > temp) count = temp
    }
    termsWhile(num)
    termsWhile(num, (isTerms = true))

    return count
}

app(2) // 1
app(10) // 3
