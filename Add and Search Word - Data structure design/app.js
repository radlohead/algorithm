// Design a data structure that supports the following two operations:

// void addWord(word)
// bool search(word)
// search(word) can search a literal word or a regular expression string containing only letters a-z or .. A . means it can represent any one letter.

// Example:

// addWord("bad")
// addWord("dad")
// addWord("mad")
// search("pad") -> false
// search("bad") -> true
// search(".ad") -> true
// search("b..") -> true
// Note:
// You may assume that all words are consist of lowercase letters a-z

class WordDictionary {
    constructor() {
        this.words = []
    }
    addWord(word) {
        this.words.push(word)
    }
    search(word) {
        const wordIndexList = word.split('').filter((s, i) => s !== '.')
        const operatorWords = () => {
            if (word.indexOf('.') > -1) {
                return this.words.map(word =>
                    wordIndexList
                        .map(n => word.split('').splice(n, 1))
                        .flat()
                        .join('')
                )
            }
            return this.words
        }
        return operatorWords().some(word => word === wordIndexList.join(''))
    }
}
const wordDictionary = new WordDictionary()
wordDictionary.addWord('bad')
wordDictionary.addWord('dad')
wordDictionary.addWord('mad')
wordDictionary.search('pad') // false
wordDictionary.search('bad') // true
wordDictionary.search('ad.') // false
wordDictionary.search('b..') // true
