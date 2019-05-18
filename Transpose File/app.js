const fs = require('fs')
const fileTxt = './file.txt'

// before
// name age
// alice 21
// ryan 30

// after
// name alice ryan
// age 21 30

fs.readFile(fileTxt, 'utf8', (err, data) => {
    if (err) throw err
    const arr = data
        .split('\n')
        .join(' ')
        .split(' ')
    const name = arr.filter((v, i) => i % 2 === 0)
    const age = arr.filter((v, i) => i % 2)
    const result = `${name.join(' ')}\n${age.join(' ')}`

    fs.writeFile(fileTxt, result, 'utf8', err => {
        if (err) throw err
    })
})
