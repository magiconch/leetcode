/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 */

// @lc code=start
function climbStairs(n: number): number {
    const assist: number[] = [0];
    for (let index = 1; index <= n; index++) {
        if (index == 1) {
            assist.push(1);
        } else if (index == 2) {
            assist.push(2);
        } else {
            assist.push(assist[index - 1] + assist[index -2]);
        }
        
    }
    return assist.pop() as number;
};
// @lc code=end

climbStairs(3);