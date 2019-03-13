const app = require('./app');

it('특정 문자열 비교 test', () => {
    expect(app('pPoooyY')).toBeTruthy();
    expect(app('Pyy')).toBeFalsy();
});