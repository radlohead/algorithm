// 하얀 칸

// 문제
// 체스판은 8*8크기이고, 검정 칸과 하얀 칸이 번갈아가면서 색칠되어 있다. 가장 왼쪽 위칸 (0,0)은 하얀색이다. 
// 체스판의 상태가 주어졌을 때, 하얀 칸 위에 말이 몇 개 있는지 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄부터 8개의 줄에 체스판의 상태가 주어진다. ‘.’은 빈 칸이고, ‘F’는 위에 말이 있는 칸이다.

const solution = (arg) => {
    const tempArr = arg.replace(/\n/g, '');
    const argIndex = arg.match(/\n/g).length;
    const rowCount = arg.indexOf('\n');
    let arr = [];
    let result = 0;

    for (let i=0; i<=argIndex; i++) {
        arr[i]=[];
        arr[i].push(tempArr.slice(i*rowCount, (i+1)*rowCount));
    }

    for (let i=0; i<arr.length; i++) {
        arr[i].forEach(a => {
            if (i % 2) {
                for (let k=1; k<=arr.length; k+=2) {
                    if (a.split('')[k] === 'F') ++result;
                }
            } else {
                for (let k=0; k<=arr.length-1; k+=2) {
                    if (a.split('')[k] === 'F') ++result;
                }
            }
        });
    }
    
    return result;
}

solution(`.F.F...F
F...F.F.
...F.F.F
F.F...F.
.F...F..
F...F.F.
.F.F.F.F
..FF..F.`);