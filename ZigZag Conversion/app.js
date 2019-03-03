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
    const strLength = str.slice().length;
    let result = [];
    let arr = [];
    let tempStr = '';

    for(let i=0; i<strLength; i++){
        for(let j=numRows; j>1; j--) {
            if(!str.length) break;
            if(j === numRows) {
                tempStr = str.substr(0, j);
                str = str.substr(j, str.length);
                arr.push(tempStr.split(''));
            } else {
                tempStr = str.substr(0, 1);
                str = str.substr(1, str.length);
                
                let tempArr = Array(4).fill('');
                tempArr[j-1] = tempStr;
                arr.push(tempArr);
            }
        }
    }

    arr.forEach((v, i) => {
        arr.forEach((a, j) => {
            if(arr[j][i]) result.push(arr[j][i]);
        });
    });
    
    return result.join('');
}

solution('PAYPALISHIRING', 4);  // PINALSIGYAHRPI