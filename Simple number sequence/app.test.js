const solution = require('./app');

it('simple number sequence test', () => {
    expect(solution('123567')).toBe(4);
    // expect(solution('899091939495')).toBe(92);
    // expect(solution('9899101102')).toBe(100);
    // expect(solution('599600601602')).toBe(-1);
    // expect(solution('8990919395')).toBe(-1);
});