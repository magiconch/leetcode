/*
 * @lc app=leetcode.cn id=238 lang=typescript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
function productExceptSelf(nums: number[]): number[] {
    const foreArr: number[] = [];
    const backArr: number[] = [];
    const result: number[] = [];
    for (let index = 0; index < nums.length; index++) {
        if (index == 0) {
            foreArr.push(1);
        } else {
            foreArr.push(foreArr[index - 1] * nums[index - 1]);
        }
    }
    
    for (let index = nums.length - 1; index >= 0; index--) {
        if (index == nums.length - 1) {
            backArr.unshift(1);
        } else {
            backArr.unshift(backArr[0] * nums[index + 1]);
        } 
        
    }
    for (let index = 0; index < nums.length; index++) {
        const element = foreArr[index] * backArr[index];
        result.push(element);
    }
    return result;
};
// @lc code=end