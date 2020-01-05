// Implement a trie with insert, search, and startsWith methods.

// Example:

// Trie trie = new Trie();

// trie.insert("apple");
// trie.search("apple");   // returns true
// trie.search("app");     // returns false
// trie.startsWith("app"); // returns true
// trie.insert("app");
// trie.search("app");     // returns true
// Note:

// You may assume that all inputs are consist of lowercase letters a-z.
// All inputs are guaranteed to be non-empty strings.

class Trie {
    constructor() {
        this.word = []
    }
    insert(word) {
        this.word.push(word)
    }
    search(word) {
        return this.word.includes(word)
    }
    startsWith(word) {
        return this.word.join(',').indexOf(word) > -1 ? true : false
    }
}
const trie = new Trie()
trie.insert('apple')
trie.search('apple') // true
trie.search('app') //false
trie.startsWith('app') //true
trie.insert('app')
trie.search('app') //true
