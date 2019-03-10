const solution = require('./app');

it('Reverse Integer test', () => {
    expect(solution([1,2,3,4,5], 2)).toEqual([3,4,5,1,2]);
    expect(solution([0,1,2,3,4], 1)).toEqual([1,2,3,4,0]);
});