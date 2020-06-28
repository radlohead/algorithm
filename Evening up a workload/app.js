// Split  Jim's work             Bob's work              Ratio  Difference
// 0      [],                    [1, 6, 2, 3, 5, 4, 1]   0:22   22
// 1      [1]                    [6, 2, 3, 5, 4, 1]      1:21   20
// 2      [1, 6]                 [2, 3, 5, 4, 1]         7:15   8
// 3      [1, 6, 2]              [3, 5, 4, 1]            9:13   4
// 4      [1, 6, 2, 3]           [5, 4, 1]               12:10  2
// 5      [1, 6, 2, 3, 5]        [4, 1]                  17:5   12
// 6      [1, 6, 2, 3, 5, 4]     [1]                     21:1   20
// 7      [1, 6, 2, 3, 5, 4, 1]  []                      22:0   22

const splitWorkLoad = (A) => {
    const aAddClone = A.slice()
    aAddClone.push(0)
    const result = aAddClone.map((v, i, arr) => {
        const arrClone = arr.slice()
        const bobList = arrClone.slice(i, arr.length)
        arrClone.splice(i, arr.length)
        const ratioRight = bobList.reduce((prev, curr) => prev + curr)
        const ratioLeft = arrClone.reduce((prev, curr) => {
            return prev + curr
        }, 0)
        const difference = Math.abs(ratioLeft - ratioRight)

        return {
            ratio: `${ratioLeft}:${ratioRight}`,
            difference,
        }
    })
    return result
}
splitWorkLoad([1, 6, 2, 3, 5, 4, 1])
// [
//     { ratio: '0:22', difference: 22 },
//     { ratio: '1:21', difference: 20 },
//     { ratio: '7:15', difference: 8 },
//     { ratio: '9:13', difference: 4 },
//     { ratio: '12:10', difference: 2 },
//     { ratio: '17:5', difference: 12 },
//     { ratio: '21:1', difference: 20 },
//     { ratio: '22:0', difference: 22 }
//   ]
