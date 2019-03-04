const solution = require('./app');

it('이진탐색 재귀 test', () => {
    expect(solution([2, 5, 10, 14, 21, 34], 5)).toBe(1);
    expect(solution([2, 5, 10, 14, 21, 34], 14)).toBe(3);
    expect(solution([2, 5, 10, 14, 21, 34, 40], 40)).toBe(6);
    expect(solution([2, 5, 10, 14, 21, 34], 21)).toBe(4);
    expect(solution([2, 5, 10, 14, 21, 34], 14)).toBe(3);
});