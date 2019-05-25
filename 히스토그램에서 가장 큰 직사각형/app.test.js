const app = require('./app')

it('히스토그램에서 가장 큰 직사각형', () => {
    expect(app(7, [3, 4, 5, 6, 5, 4, 7])).toBe(24)
    expect(app(7, [2, 1, 4, 5, 1, 3, 3])).toBe(8)
    expect(app(4, [1000, 1000, 1000, 1000])).toBe(4000)
    expect(app(0)).toBe(undefined)
})
