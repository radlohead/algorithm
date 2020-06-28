const solution = (A) => Array.from(new Set(A.slice().join('').split(''))).sort()
solution(['abc', 'abd']) // abcd
solution(['bcdxx', 'bcey', 'bcez']) // bcedxyz
