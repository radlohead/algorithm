// s1 = "my&friend&Paul has heavy hats! &"
// s2 = "my friend John has many many friends &"
// mix(s1, s2) --> "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

// s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
// s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
// mix(s1, s2) --> "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

const mix = (...params) => {
    const charMatchList = (char, target) => {
        const regex = new RegExp(target, 'g')
        return char.match(regex)
    }
    const firstCharDuplicateList = char => {
        const result = []
        const charDuplicateRemoveList = Array.from(new Set(char))

        charDuplicateRemoveList.forEach((c, i) => {
            if (c === ' ') return
            result.push(charMatchList(char, c))
        })
        return result.sort((a, b) => b.length - a.length)
    }
    const oneLengthRemoveRestList = char =>
        firstCharDuplicateList(char).filter(list => list.length > 1)
    const firstDuplicateCharList = oneLengthRemoveRestList(params[0]).map(
        list => {
            list.unshift('1:')
            return list
        }
    )
    const lastDuplicateCharList = oneLengthRemoveRestList(params[1]).map(
        list => {
            list.unshift('2:')
            return list
        }
    )
    const result = firstDuplicateCharList
        .concat(lastDuplicateCharList)
        .sort((a, b) => b.length - a.length)
        .map(v => v.join(''))
        .join('/')

    return result
}

const textList = [
    'my&friend&Paul has heavy hats! &',
    'my friend John has many many friends &'
]
console.log(mix(...textList)) //2:nnnnn/1:aaaa/1:&&&/1:hhh/2:mmm/2:yyy/2:aaa/1:yy/1:ee/1:ss/2:ff/2:rr/2:ii/2:ee/2:dd/2:hh/2:ss
