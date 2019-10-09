// My knight wants to level up. Implement a function that receives the knight's current level, level-up multiplier, and experience gain per killed monster, and returns the number of monsters he needs to defeat in order to level up.

// Notes
// Level 1 is always 100xp.
// Assume that the knight begins with the minimum exp required for his level.
// Multiplier is always >= 1.
// Example
// Multiplier = 2

// lvl 1 = 100xp
// lvl 2 = (100xp * 2) => 200xp
// lvl 3 = (200xp * 2) => 400xp
// lvl 4 = (400xp * 2) => 800xp

const app = (...arg) => {
    const firstNum = Number(arg[0].match(/[0-9]/g).join(''))
    const firstChar = arg[0].match(/[a-zA-Z]/g).join('')
    const lastNum = arg[2]

    return firstNum * lastNum + firstChar
}

app('100xp', '*', 2) // 200xp
