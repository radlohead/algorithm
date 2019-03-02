// Given n non-negative integers a1, a2, ..., an , where each 
// represents a point at coordinate (i, ai). n vertical lines are drawn such 
// that the two endpoints of line i is at (i, ai) and (i, 0). 
// Find two lines, which together with x-axis forms a container, 
// such that the container contains the most water.

// Note: You may not slant the container and n is at least 2.

// Example:

// Input: [1,8,6,2,5,4,8,3,7]
// Output: 49

const solution = (arg) => {
    let result = 0;
    for(let i=0; i<arg.length; i++){
        for(let j=0; j<arg.length; j++){
            for(let k=0; k<=j; k++){
                if(j+i < arg.length && j !== 0) {
                    const minSquareWater = Math.min(arg[i], arg[i+j]) * j;
                    result < minSquareWater ? result = minSquareWater : result;
                    break;
                }
            }
        }
    }
    return result;
}

solution([1,8,6,2,5,4,8,3,7]);