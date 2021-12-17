/*
 * @lc app=leetcode.cn id=746 lang=typescript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
function minCostClimbingStairs(cost: number[]): number {
    const minCost: number[] = [];
    const n = cost.length;
    minCost[0] = 0;
    minCost[1] = Math.min(cost[1], cost[0]) ;
    for (let index = 2; index < n; index++) {
        minCost[index] = Math.min(minCost[index - 1] + cost[index], minCost[index - 2] + cost[index - 1]); 
    }
    return minCost.pop() as number;
};
// @lc code=end

minCostClimbingStairs([10,15,20]);