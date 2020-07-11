// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given an integer, convert it to a roman numeral. Input is guaranteed to be within the range from 1 to 3999.

// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// Example 1:

// Input: 3
// Output: "III"
// Example 2:

// Input: 4
// Output: "IV"
// Example 3:

// Input: 9
// Output: "IX"
// Example 4:

// Input: 58
// Output: "LVIII"
// Explanation: L = 50, V = 5, III = 3.
// Example 5:

// Input: 1994
// Output: "MCMXCIV"
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

const intToRoman = (num) => {
    const ROMAN = {
        [1]: 'I',
        [5]: 'V',
        [10]: 'X',
        [50]: 'L',
        [100]: 'C',
        [500]: 'D',
        [1000]: 'M',
    }
    const ROMAN_FIXED = {
        [4]: ROMAN[1] + ROMAN[5],
        [9]: ROMAN[1] + ROMAN[10],
        [40]: ROMAN[10] + ROMAN[50],
        [90]: ROMAN[10] + ROMAN[100],
        [400]: ROMAN[100] + ROMAN[500],
        [900]: ROMAN[100] + ROMAN[1000],
    }
    const nums = String(num)
        .split('')
        .map((s, i, arr) => (+s).toFixed(arr.length - i - 1).replace(/\./, ''))
        .map((s) => {
            if (
                !(
                    s.includes(2) ||
                    s.includes(3) ||
                    s.includes(6) ||
                    s.includes(7) ||
                    s.includes(8)
                )
            ) {
                if (Number(s)) return s
                else return null
            }

            const temp = Array(4)
                .fill()
                .map(() => [])
                .map((v, i) => {
                    if (!i) {
                        if (s >= 1000) {
                            s -= 1000
                            return 1000
                        }
                        if (s >= 500 && s >= 200) {
                            s -= 500
                            return 500
                        } else if (s > 50 && s < 100) {
                            s -= 50
                            return 50
                        } else if (s > 5 && s < 10) {
                            s -= 5
                            return 5
                        }
                    }
                    if (s >= 1000) {
                        s -= 1000
                        return 1000
                    }
                    if (s - 100 >= 0) {
                        s -= 100
                        return 100
                    }
                    if (s - 10 >= 0) {
                        s -= 10
                        return 10
                    }
                    if (s - 1 >= 0) {
                        s -= 1
                        return 1
                    }
                    return null
                })
            return temp
        })
        .flat()
        .filter((v) => v)

    const result = nums
        .map((n) => {
            if (ROMAN_FIXED[n]) return ROMAN_FIXED[n]
            else if (ROMAN[n]) return ROMAN[n]
        })
        .join('')
    return result
}

intToRoman(2000) //MM
intToRoman(3) //III
intToRoman(4) //IV
intToRoman(9) //IX
intToRoman(58) //LVIII
intToRoman(1994) //MCMXCIV
