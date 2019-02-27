// Complete the solution so that it returns the number of times the search_text is found within the full_text.

// search_substr( fullText, searchText, allowOverlap = true )
// so that overlapping solutions are (not) counted. If the searchText is empty, it should return 0. Usage examples:

// search_substr('aa_bb_cc_dd_bb_e', 'bb') # should return 2 since bb shows up twice
// search_substr('aaabbbcccc', 'bbb') # should return 1
// search_substr( 'aaa', 'aa' ) # should return 2
// search_substr( 'aaa', '' ) # should return 0
// search_substr( 'aaa', 'aa', false ) # should return 1

const solution = (fullText, searchText, allowOverlap) => {
    const searchTextLength = searchText.length;
    let fullTextLength = fullText.length;
    let result = 0;
    
    if(!searchText.length) return 0;
    while(fullTextLength >= searchTextLength) {
        if(fullText.substring(fullTextLength - searchTextLength, fullTextLength) === searchText) {
            if(allowOverlap !== false) ++result;
            fullText = fullText.replace(searchText, '');
            ++result;
        }
        fullTextLength--;
    }
    
    return result;
}

solution('aa_bb_cc_dd_bb_e', 'bb');
solution('aaabbbcccc', 'bbb');
solution('aaa', 'aa');
solution('aaa', '');
solution('aaa', 'aa', false );