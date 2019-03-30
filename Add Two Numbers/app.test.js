const solution = require('./app');

it('Add Two Numbers', () => {
    const param = [[2, 4, 3], [5, 6, 4]];
    expect(solution(param[0], param[1])).toBe(807);
});