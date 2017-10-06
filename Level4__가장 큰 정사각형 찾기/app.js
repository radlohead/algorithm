function findLargestSquare(board)
{
    var answer = 0;
    for(let i=0; i<board[0].length; i++){
        for(let j=0; j<board.length; j++){
            board[i][j] = board[i][j] === "O" ? 1:0;
        }
    }
    for(let i=1; i<board[0].length; i++){
        for(let j=1; j<board.length; j++){
            if(board[i][j] != 0){
                board[i][j] = 1 + Math.min(board[i-1][j], board[i][j-1], board[i-1][j-1]);
            }
            if(answer < board[i][j]){
                answer = board[i][j];
            }
        }
    }
    return Math.pow(answer, 2);
}

//아래 코드는 테스트를 위한 출력 코드 입니다.
var testBoard = [['X','O','O','O','X'],['X','O','O','O','O'],['X','X','O','O','O'],['X','X','O','O','O'],['X','X','X','X','X']];
console.log(findLargestSquare(testBoard));