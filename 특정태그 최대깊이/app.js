const solution = () => {
    const topUl = document.querySelector('body ul')
    const count = []
    const depth = (tag, i) => {
        if (!tag || !tag.children || !tag.children.length) return
        if (tag.children[0].tagName === 'LI') {
            if (!count[i]) count[i] = 1
            else ++count[i]
        }
        depth(tag.children[0], i)
    }
    Array.from(topUl.children).forEach((liChild, i) => {
        if (liChild.tagName === 'LI') {
            if (!count[i]) count[i] = 1
            else ++count[i]
        }
        depth(liChild, i)
    })
    return count.sort((a, b) => b - a)[0]
}
solution() // 3
