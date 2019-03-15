// In this Kata, you will be given a string of numbers in sequence and your task will be to return the missing number. If there is no number
// missing or there is an error in the sequence, return -1.

// For example:

// missing("123567") = 4 
// missing("899091939495") = 92
// missing("9899101102") = 100
// missing("599600601602") = -1 -- no number missing
// missing("8990919395") = -1 -- error in sequence. Both 92 and 94 

const solution = (str) => {
    let result = [];
    let temp = [];
    const strArr = str.split('');
    
    for(let i = 0; i<strArr.length / 2; i++) {
        result = [];
        strArr.forEach(v => {
            result.push(Number(v));
        });
        temp = result.slice();
        temp = temp.filter((v, j, arr) => {
            if(v + 1 === arr[j + 1]) return v;
            if(arr[j - 1] + 1 === v) return v;
        });
        
        if(result.length === temp.length) {
            result = temp.filter((v, i, arr) => {
                if(v + 1 !== arr[i + 1]) return v;
            })[0] + 1;
            
            return result;
        }
    }
}

module.exports = solution;