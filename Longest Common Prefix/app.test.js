const solution = require('./app');

it('Longest Common Prefix', () => {
    expect(solution(["flower","flow","flight"])).toBe('fl');
    expect(solution(["dog","racecar","car"])).toBe('');
});