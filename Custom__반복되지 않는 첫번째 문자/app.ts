/* 반복되지 않는 첫번째 문자 */

const noOverlap: Function = (str: string): string => {
    let result: string = str;
    let arr: Array<string> = str.split('');
    arr.map((v: string, i: number, arr: Array<string>): any => {
        arr.filter((v2: string, i2: number, arr2: Array<string>) => {
            if(i === i2) return false;
            else if(v === v2) {
                result = result.split(v2).join('');
            }
        });
    });
    return result[0];
}
console.log(noOverlap('total'));
console.log(noOverlap('teetar'));