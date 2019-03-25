// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

const solution = (arg) => {
    const minCharLength = arg.map(v => v.length).sort((a, b) => a - b)[0];
    const targetChar = arg.filter(v => v.length === minCharLength)[0];
    const restCharList = arg.filter(v => v !== targetChar);
    
    if (!arg.length) return '';
    if (arg.length === 1 || !restCharList.length) return arg[0];

    let result = restCharList.map(v => {
        const duplicateCharList = v.match(new RegExp(`[${targetChar}]`, 'g'));
        if (!duplicateCharList) return;
        return duplicateCharList.join('');
    });
    if (!result.every(v => v && v)) return '';

    result = result.sort()[0].substr(0, targetChar.length);
    return result;
}

module.exports = solution;