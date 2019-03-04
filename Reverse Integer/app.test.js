const solution = require('./app');

it('Reverse Integer test', () => {
    expect(solution(123)).toBe(321);
    expect(solution(-123)).toBe(-321);
    expect(solution(120)).toBe(21);
});