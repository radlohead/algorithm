// Implement a basic calculator to evaluate a simple expression string.

// The expression string contains only non-negative integers, +, -, *, / operators and empty spaces . The integer division should truncate toward zero.

// Example 1:

// Input: "3+2*2"
// Output: 7
// Example 2:

// Input: " 3/2 "
// Output: 1
// Example 3:

// Input: " 3+5 / 2 "
// Output: 5

const calculate = s => {
    let numList = s.split(/\+|\-|\*|\//g).map(num => Number(num))
    const markList = s
        .split(/[0-9]/g)
        .filter(mark => mark)
        .map(mark =>
            mark.split('').filter(mark => mark.replace(/s/g, '') !== ' ')
        )
        .flat()
    const operatorIndexList = argMarkList => {
        return markList
            .map((mark, i) => {
                if (argMarkList.includes(mark)) return i
            })
            .filter(num => typeof num === 'number')
    }
    const operator = i => {
        switch (markList[i]) {
            case '+':
                while (!numList[i + 1]) i -= 1
                numList[i] = numList[i] + numList[i + 1]
                delete numList.splice(i + 1, 1)
                break
            case '-':
                while (!numList[i + 1]) i -= 1
                numList[i] = numList[i] - numList[i + 1]
                delete numList.splice(i + 1, 1)
                break
            case '*':
                while (!numList[i + 1]) i -= 1
                numList[i] = numList[i] * numList[i + 1]
                delete numList.splice(i + 1, 1)
                break
            case '/':
                while (!numList[i + 1]) i -= 1
                numList[i] = parseInt(numList[i] / numList[i + 1])
                delete numList.splice(i + 1, 1)
                break
        }
    }
    operatorIndexList(['*', '/']).forEach(i => operator(i))
    operatorIndexList(['+', '-']).forEach(i => operator(i))

    return numList[0]
}
calculate('3+2*2') // 7
calculate('3+2*2/3') // 4
calculate(' 3/2 ') // 1
calculate(' 3+5 / 2 ') // 5
