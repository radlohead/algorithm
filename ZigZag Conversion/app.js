// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number 
// of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);
// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:

// P     I    N
// A   L S  I G
// Y A   H R
// P     I

// 0,1,2,3
// 2
// 1
// 0,1,2,3

const solution = (str, numRows) => {
    let result = '';
    let arr = [];
    const tempArr = Array(numRows)
                        .fill(numRows)
                        .map((v, i) => v - i)
                        .splice(0, numRows - 1);

    const arrFull = (i, tempArr) => {
        result = str.substr(0, tempArr[i]);
        str = str.substr(tempArr[i], str.length);
        arr.push(result.split(''));
    }

    const arrOne = (i, tempArr) => {
        let arrFill = Array(numRows).fill('');

        result = str.substr(0, 1);
        str = str.substr(1, str.length);
        arrFill[tempArr[i] - 1] = result;
        arr.push(arrFill);
    }
    
    Array(str.length).fill('').forEach(() => {
        tempArr.forEach((v, i) => {
            if(!str.length) return;
            if(tempArr[i] === numRows) arrFull(i, tempArr); 
            arrOne(i, tempArr);
        });
    });
    
    result = arr
                .map((v, i) => arr.map((a, j) => arr[j][i]))
                .join('')
                .replace(/,/g, '');
    
    return result;
}

solution('PAYPALISHIRING', 4);  // PINALSIGYAHRPI