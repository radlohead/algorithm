// [  "apple",     "pear",     "banana"  ]  -->
// ["app", "le", "pe", "ar", "ban", "ana"]

// [  "apple",     "pear",     "banana",   "bomb"]  -->
// ["app", "le", "pe", "ar", "ban", "ana", "bomb"]

const solution = (A) => {
    const exceptionList = ['bomb']
    const result = A.map((v) => {
        const middleIndex = Math.ceil(v.length / 2)
        if (exceptionList.includes(v)) return v
        return [v.substr(0, middleIndex), v.substr(middleIndex)]
    }).flat()
    return result
}
solution(['apple', 'pear', 'banana'])
// [
//     'app',  'le',
//     'pe',   'ar',
//     'ban',  'ana'
//   ]
solution(['apple', 'pear', 'banana', 'bomb'])
// [
//     'app',  'le',
//     'pe',   'ar',
//     'ban',  'ana',
//     'bomb'
//   ]
