/*
 * @lc app=leetcode.cn id=283 lang=typescript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    // const len = nums.length;
    // nums = nums.filter((ele) => {
    //     return ele != 0
    // });
    // const newLen = nums.length;
    // for (let index = 0; index < len - newLen; index++) {
    //     nums.push(0);
    // }
    // console.log(nums);
    const zeroStack: number[] = [];
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        if (element == 0) {
            zeroStack.push(index);
        } else if (element != 0 && zeroStack.length != 0) {
            const zeroindex: number = zeroStack.shift() as number;
            nums[zeroindex] = element;
            nums[index] = 0;
            zeroStack.push(index);
        }
    }
    return;
};
// @lc code=end

moveZeroes([0,1,0,3,12])