const solution = require('./app');

it('올바른 괄호 test', () => {
    expect(solution('()()')).toBeTruthy();
    expect(solution('(())()')).toBeTruthy();
    expect(solution(')()(')).toBeFalsy();
    expect(solution('(()(')).toBeFalsy();
    expect(solution('(()))(()')).toBeFalsy();
});