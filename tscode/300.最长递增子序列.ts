/*
 * @lc app=leetcode.cn id=300 lang=typescript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
function lengthOfLIS(nums: number[]): number {
    const result: number[] = [];
    for (let index = 0; index < nums.length; index++) {
        result.push(1);
    }
    for (let index = 1; index < nums.length; index++) {
        const element = nums[index];
        for (let j = 0; j < index; j++) {
            const prvele = nums[j];
            if (prvele < element && result[j] + 1 > result[index]) {
                result[index] = result[j] + 1;
            }
        }
    }
    return Math.max(...result);

};
// @lc code=end

lengthOfLIS([0,1,0,3,2,3]);