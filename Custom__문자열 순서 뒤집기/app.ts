// 문자열 순서 뒤집기

const stringTurn: Function = (str: string): any => {
    let result = '';
    for(let i=str.length-1; i>=0; i--) {
        result += str[i];
    }
    return result;
};
console.log(stringTurn('there is no try'));