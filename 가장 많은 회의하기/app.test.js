const solution = require('./app');

it('가장 많은 회의하기 test', () => {
    expect(solution([[1, 2], [2, 4], [2, 2]])).toBe(3);
    expect(solution([[1, 3], [3, 5], [5, 7]])).toBe(3);
    expect(solution([[1, 4], [2, 6], [4, 7]])).toBe(2);
    expect(solution([[1, 14], [2, 9], [4, 7]])).toBe(1);
});