// Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'.

// A region is captured by flipping all 'O's into 'X's in that surrounded region.

// Example:

// X X X X
// X O O X
// X X O X
// X O X X
// After running your function, the board should be:

// X X X X
// X X X X
// X X X X
// X O X X
// Explanation:

// Surrounded regions shouldn’t be on the border, which means that any 'O' on the border of the board are not flipped to 'X'. Any 'O' that is not on the border and it is not connected to an 'O' on the border will be flipped to 'X'. Two cells are connected if they are adjacent cells connected horizontally or vertically

const solve = board => {
    const O = 'O'
    const X = 'X'
    const oIndexList = board
        .map((list, i) =>
            list
                .map((char, j) => {
                    if (char === O) {
                        return [i, j]
                    }
                })
                .filter(v => v && v)
        )
        .flat()
    const connectIndexList = Array.from(
        new Set(
            oIndexList
                .slice()
                .map((list, i, arr) => {
                    const arrClone = arr.slice()
                    const duplicateIndex = arr.findIndex(
                        arrList => arrList === list
                    )
                    arrClone.splice(duplicateIndex, 1)
                    return arrClone.filter(cloneList => {
                        if (cloneList[0] === list[0]) {
                            if (
                                cloneList[1] - 1 === list[1] ||
                                cloneList[1] + 1 === list[1]
                            )
                                return true
                        } else if (cloneList[1] === list[1]) {
                            if (
                                cloneList[0] - 1 === list[0] ||
                                cloneList[0] + 1 === list[0]
                            )
                                return true
                        }
                    })
                })
                .flat()
                .sort((a, b) => a[0] - b[0])
                .sort((a, b) => a[1] - b[1])
        )
    )
    const successIndexList = oIndexList.filter(
        (list, i) => list !== connectIndexList[i]
    )
    const initList = board.map(list => list.map(char => (char = X)))
    successIndexList.forEach(list => {
        initList[list[0]][list[1]] = O
    })

    return initList
}

solve([
    ['X', 'X', 'X', 'X'],
    ['X', 'O', 'O', 'X'],
    ['X', 'X', 'O', 'X'],
    ['X', 'O', 'X', 'X']
]) // [[ 'X', 'X', 'X', 'X' ],[ 'X', 'X', 'X', 'X' ],[ 'X', 'X', 'X', 'X' ],[ 'X', 'O', 'X', 'X' ]]
