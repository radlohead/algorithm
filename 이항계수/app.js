// 문제
// 자연수 N과 정수 K가 주어졌을 때 이항 계수 (N K)를 구하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 N과 K가 주어진다. (1 ≤ N ≤ 10, 0 ≤ K ≤ N)

// 입력
// 5 2

// 출력
// 10

const fac = n => {
    if (n <= 1) return n
    return fac(n - 1) + fac(n - 2)
}
const app = (n, k) => (fac(n) / fac(k)) * fac(n - k)
console.log(app(5, 2)) // 10
