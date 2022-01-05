/*
 * @lc app=leetcode.cn id=494 lang=typescript
 *
 * [494] 目标和
 */

// @lc code=start
function findTargetSumWays(nums: number[], target: number): number {
    return solution_494_1(nums, target);
};

function solution_494_1(nums: number[], target: number): number {
    if (nums.length <= 0) {
        return 0;
    }
    // 直接进行一个数据计算
    let preList: number[] = [nums[0], -nums[0]];

    for (let index = 1; index < nums.length; index++) {
        const item = nums[index];
        let chiList: number[] = [];
        for (const parent of preList) {
            chiList.push(parent + item);
            chiList.push(parent - item);
        }
        preList = chiList;
    }

    let result: number = 0;

    for (let index = 0; index < preList.length; index++) {
        const element = preList[index];
        if (element == target) {
            result++;
        }
    }

    return result;
};

// @lc code=end

findTargetSumWays([1,1,1,1,1], 3);