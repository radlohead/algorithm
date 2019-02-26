// 1보다 크거나 같고, 45보다 작거나 같은 수 6개를 출력한다.

// 채점 프로그램은 랜덤을 이용해서 수 6개와 보너스 숫자 하나를 구한다.

// 채점 프로그램이 구한 숫자와 6개와 번호가 모두 일치하면 100점을 받는다.
// 5개의 번호가 일치하고, 일치하지 않는 숫자가 보너스 숫자와 일치하면 80점을 받는다.
// 5개의 번호가 일치하면 60점을 받는다.
// 4개의 번호가 일치하면 40점을 받는다.
// 3개의 번호가 일치하면 20점을 받는다.
// 그 외의 경우에는 틀렸습니다를 받는다.

const randomIndex = () => Math.ceil(Math.random()*45);
const solution = () => {
    let result = new Set();
    while(result.size < 6) result.add(randomIndex());
    result = firstNumbers.filter(v => result.has(v));
    return result.length >= 3 && (result.length-2) * 20;
}

const firstNumbers = [10, 24, 28, 30, 40, 42];
solution();