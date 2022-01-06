/*
 * @lc app=leetcode.cn id=53 lang=typescript
 *
 * [53] 最大子数组和
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
    let result: number = nums.length > 0 ? nums[0] : -Number.MAX_VALUE;
    for (let i = 0; i < nums.length; i++) {
        let tempMaxSub = -Number.MAX_VALUE;
        let tempSum = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            if (tempSum > tempMaxSub) {
                tempMaxSub = tempSum;
            }
            tempSum += nums[j];
        }
        if (tempMaxSub > result) {
            result = tempMaxSub;
        }
    }
    return result;
};
// @lc code=end

maxSubArray([-2,1,-3,4,-1,2,1,-5,4])