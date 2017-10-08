var longest_palindrom = function (s) {
    var result = s;
    var prevCount = 0;
    var currentCount = 0;
    for (var i = 0; i < s.length; i++) {
        for (var k = i, j = result.length - 1; j >= 0; k++, j--) {
            if (result[k] === result[j])
                ++prevCount;
        }
        if (prevCount > currentCount)
            currentCount = prevCount;
        prevCount = 0;
        result = result.slice(0, -1);
    }
    return currentCount;
};
console.log(longest_palindrom("토마토맛토마토"));
console.log(longest_palindrom("토마토"));
