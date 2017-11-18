/*
Input: x = 1, y = 4

Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
*/

const hammingDistance = (x: number, y: number): number => {
    return binaryNumber(x) + binaryNumber(y);
};

const binaryNumber = (num: number): number => {
    let arr: Array<string> = num.toString(2).split('');
    const result = arr.reduce((p: string, c: string): any => {
        return parseInt(p) + parseInt(c);
    });
    return parseInt(result);
};

console.log(hammingDistance(1, 4));