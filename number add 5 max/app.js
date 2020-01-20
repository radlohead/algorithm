// number is add 5 of max
// 268 -> 5268
// 670 -> 6750
// 0 -> 50
// -999 -> -5999

const app = N => {
    let ADD_NUMBER = 5
    const list = String(N)
        .replace(/\-/, '')
        .split('')
    const isMinus = String(N).indexOf('-') > -1
    const multiList = Array(list.length + 1)
        .fill(list)
        .slice()
        .map((list, i) => {
            const temp = list.slice()
            temp.splice(i, 0, ADD_NUMBER)
            return temp
        })
    const resultList = multiList
        .map(list => Number(list.join('')))
        .sort((a, b) => b - a)
    const result = isMinus ? -resultList[resultList.length - 1] : resultList[0]
    if (result > 8000 || result < -8000) {
        console.error(`N is an integer within the range -8000 ~ 8000`)
    }
    return result
}
app(268) // 5268
app(670) // 6750
app(0) // 50
app(-999) // -5999
