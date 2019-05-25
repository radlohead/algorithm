// 정수를 저장하는 큐를 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성하시오.

// 명령은 총 여섯 가지이다.

// push X: 정수 X를 큐에 넣는 연산이다.
// pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// size: 큐에 들어있는 정수의 개수를 출력한다.
// empty: 큐가 비어있으면 1, 아니면 0을 출력한다.
// front: 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// back: 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.

const log = console.log
class App {
    constructor() {
        this.arr = []
    }
    push(num) {
        this.arr.push(num)
    }
    front() {
        log(this.arr[0])
    }
    back() {
        const len = this.arr.length - 1
        log(this.arr[len])
    }
    size() {
        log(this.arr.length)
    }
    empty() {
        const isEmptyNum = this.arr.length ? 0 : 1
        log(isEmptyNum)
    }
    pop() {
        const firstNum = this.arr[0]
        if (!firstNum) {
            log(-1)
            return
        }
        log(firstNum)
        this.arr.pop()
    }
}

const app = new App()
app.push(1)
app.push(2)
app.front() // 1
app.back() //2
app.size() //2
app.empty() // 0
app.pop() // 1
app.pop() // 2
app.pop() // -1
app.size() // 0
app.empty() // 1
app.pop() // -1
app.push(3)
app.empty() // 0
app.front() // 2
