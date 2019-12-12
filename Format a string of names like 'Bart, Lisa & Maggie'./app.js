// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// Example:

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// // returns 'Bart'

// list([])
// // returns ''
// Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.

const list = arr => {
    if (!arr.length) return ''
    else if (arr.length === 1) return arr[0].name
    else {
        const result = arr.reduce((wrap, obj, i, arr) => {
            if (i !== 0 && i + 2 <= arr.length) wrap += ', '
            else if (i + 1 === arr.length) wrap += ' & '
            return (wrap += obj.name)
        }, '')
        return result
    }
}
list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]) // 'Bart, Lisa & Maggie'
list([{ name: 'Bart' }, { name: 'Lisa' }]) // 'Bart & Lisa'
list([{ name: 'Bart' }]) // 'Bart'
list([]) // ''
