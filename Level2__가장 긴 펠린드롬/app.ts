const longest_palindrom: Function = (s: string): number => {
    let result: string = s;
    let prevCount: number = 0;
    let currentCount: number = 0;
    for(let i: number=0; i<s.length; i++){
        for(let k: number=i, j: number=result.length-1; j>=0; k++, j--){
            if(result[k] === result[j]) ++prevCount;
        }
        if(prevCount > currentCount) currentCount = prevCount;
        prevCount = 0;
        result = result.slice(0, -1);
    }
    return currentCount;
};
console.log(longest_palindrom("토마토맛토마토"));
console.log(longest_palindrom("토마토"));