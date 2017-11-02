/*
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

const twoSum = (nums: Array<number>, target: number): Array<number> => {
    let result: Array<number> = [];
    for(let i: number=0; i<nums.length; i++){
        for(let j: number=i+1; j<nums.length; j++){
            if(nums[i] + nums[j] === target) result.push(i, j);
        }
    }
    return result;
};

twoSum([3, 2, 4], 6);