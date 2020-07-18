const mergeTwoLists = (l1, l2) => {
    if (!l1 || !l2) return l1 || l2
    const linkThem = (smaller, greater) => {
        smaller.next = mergeTwoLists(smaller.next, greater)
        return smaller
    }
    return l1.val < l2.val ? linkThem(l1, l2) : linkThem(l2, l1)
}
mergeTwoLists([1, 2, 4], [1, 3, 4])
