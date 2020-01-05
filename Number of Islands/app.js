// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:

// Input:
// 11110
// 11010
// 11000
// 00000

// Output: 1
// Example 2:

// Input:
// 11000
// 11000
// 00100
// 00011

// Output: 3

const log = console.log
const numIsLands = arr => {
    const n = arr.length
    const splitList = arr.map(n => n.split(''))
    const result = []
    let queue = []
    let queueAddList = []
    let beforeQueueList = []
    const tempList = []
    const blockCheckList = [
        [1, 0],
        [0, 1],
        [-1, 0],
        [0, -1]
    ]
    let count = 0

    splitList.forEach((list, i) => {
        list.forEach((v, j) => {
            if (v === '0') return
            tempList.push([Number(i), Number(j)])
        })
    })

    const eachWhile = (tempList, n) => {
        if (!queue.length) {
            let isPush = true

            queue.push(tempList[0])
            tempList.shift()

            while (queue.length > 0 && !queue.includes(undefined)) {
                const queueChange = queue => {
                    isPush = true
                    queueAddList = queue
                        .map(queueList => {
                            return blockCheckList.map(blockList => [
                                queueList[0] + blockList[0],
                                queueList[1] + blockList[1]
                            ])
                        })
                        .flat()
                    beforeQueueList = queueAddList.filter(addList => {
                        if (
                            JSON.stringify(tempList).includes(
                                JSON.stringify(addList)
                            )
                        ) {
                            return true
                        }
                    })
                }

                if (isPush) {
                    isPush = false

                    queueChange(queue)

                    if (!result[count]) result[count] = []
                    if (!JSON.stringify(result[count]).includes(queue[0]))
                        result[count].push(queue[0])
                    queue.shift()

                    if (beforeQueueList.length) {
                        queue.push(...beforeQueueList)
                    }

                    if (queue.length) {
                        const tempIndexList = Array.from(
                            new Set(
                                queue
                                    .map((list, i) =>
                                        tempList.findIndex(queueList => {
                                            if (
                                                JSON.stringify(list) ===
                                                JSON.stringify(queueList)
                                            ) {
                                                return list
                                            }
                                        })
                                    )
                                    .filter(n => n > -1)
                                    .sort((a, b) => a - b)
                            )
                        )
                        tempIndexList
                            .sort((a, b) => b - a)
                            .forEach(index => {
                                tempList.splice(index, 1)
                            })
                    } else {
                        ++count
                        return
                    }
                }
            }
        }
    }

    while (tempList.length > 0) {
        eachWhile(tempList, n)
    }

    return result.length
}
numIsLands(['11110', '11010', '11000', '00000']) // 1
numIsLands(['11000', '11000', '00100', '00011']) // 3
