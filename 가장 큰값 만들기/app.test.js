const solution = require('./app');

it('가장 큰값 만들기 test', () => {
    expect(solution([1,9,80,4])).toEqual([9,80,4,1]);
    expect(solution([15,6,9])).toEqual([9,6,15]);
    expect(solution([50,5,530])).toEqual([5,530,50]);
});