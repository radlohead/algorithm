/*
직사각형을 만드는 데 필요한 4개의 점 중 3개의 좌표가 주어질 때,
나머지 한 점의 좌표를 return하도록 solution 함수를 완성해 주세요.
단, 직사각형의 각 변은 x축, 혹은 y축에 평행하며,
반드시 직사각형을 만들 수 있는 경우만 입력으로 주어집니다.
*/

function Rectangle(v){
    let arrTemp = [[],[]];
    let arrSort = [[],[]];
    let arrOverlap = [];

    for(let i=0; i < arrSort.length; i++){
        v.map(v => arrTemp[i].push(v[i]));
        arrSort[i] = arrTemp[i].sort((a, b) => a - b);
        arrSort[i].reduce((b, c, index, arr) => {
            if(arr[index] === arr[index+1]) arrOverlap.push(arr[index]);
        }, []);
        arrSort[i].splice(arrSort[i].indexOf(arrOverlap[i]), 2);
    }
    return arrSort[0].concat(arrSort[1]);
}

const arr = [[3, 4],[1, 4],[3, 10]];
console.log(Rectangle(arr));

const arr2 = [[1, 10],[1, 4],[3, 10]];
console.log(Rectangle(arr2));
