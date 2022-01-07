/*
 * @lc app=leetcode.cn id=53 lang=typescript
 *
 * [53] 最大子数组和
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
    return solution_53_1(nums);
};

function solution_53_1(nums: number[]): number {
    if (nums.length < 1) {
        return 0;
    }
    nums = numsFilter(nums);
    let result: number = nums[0];
    let allNegativeNumbers: number = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            allNegativeNumbers++;
            continue;
        }
        let tempSum = nums[i];
        let tempMaxSub = tempSum;
        for (let j = i + 1; j < nums.length; j++) {
            tempSum += nums[j];
            if (tempSum > tempMaxSub) {
                tempMaxSub = tempSum;
            }
        }
        if (tempMaxSub > result) {
            result = tempMaxSub;
        }
    }
    if (allNegativeNumbers == nums.length) {
        return Math.max(...nums);
    }
    return result;
};
/**
 * 将所有相邻的正数和所有相邻的负数都放到一起
 * 特殊情况，当所有的都是负数的时候。
 * @param nums 
 * @returns 
 */
function numsFilter(nums: number[]): number[] {
    const result: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        
        let tempSumVal: number = nums[i];
        let j: number = i + 1;
        while(nums[i] * nums[j] > 0) {
            tempSumVal += nums[j];
            j++;
            i++;
        }
        result.push(tempSumVal);
    }
    if (result.length == 1 && result[0] < 0) {
        return [Math.max(...nums)];
    }
    return result;
};

// @lc code=end

maxSubArray([5,4,-1,7,8])