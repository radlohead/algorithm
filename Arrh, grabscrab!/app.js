// Pirates have notorious difficulty with enunciating. They tend to blur all the letters together and scream at people.

// At long last, we need a way to unscramble what these pirates are saying.

// Write a function that will accept a jumble of letters as well as a dictionary, and output a list of words that the pirate might have meant.

// For example:

// grabscrab( "ortsp", ["sport", "parrot", "ports", "matey"] )
// Should return ["sport", "ports"].

const grabscrab = (S, A) => {
    return A.map((v) => {
        let stateList = []
        return v.split('').map((v2, j) => {
            if (v.length !== S.length) return
            else if (S.includes(v2)) stateList.push(true)
            else stateList.push(false)

            if (j + 1 === S.length) return stateList.every((v) => v) ? v : ''
        })
    })
        .flat()
        .filter((v) => v)
}
grabscrab('ortsp', ['sport', 'parrot', 'ports', 'matey']) // [ 'sport', 'ports' ]
