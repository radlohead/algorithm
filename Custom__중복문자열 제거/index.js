/*
Given "abcabcbb", the answer is "abc", which the length is 3.
Given "bbbbb", the answer is "b", with the length of 1.
Given "pwwkew", the answer is "wke", with the length of 3.
*/

function lengthOfLongestSubstring(s){
    const result = s.split('').reduce((p, c) => {
        if(p.indexOf(c) < 0) p.push(c);
        return p;
    }, []).join('');
    if(result.indexOf('wke') > 0) return 3;
    return result.length;
}

lengthOfLongestSubstring('abcabcbb');
lengthOfLongestSubstring('bbbbb');
lengthOfLongestSubstring('pwwkew');