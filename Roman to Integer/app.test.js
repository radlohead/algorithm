const solution = require('./app');

it('roman to integer test', () => {
    expect(solution('IV')).toBe(4);
    expect(solution('LVIII')).toBe(58);
    expect(solution('MCMXCIV')).toBe(1994);
});