/*
 * @lc app=leetcode.cn id=1137 lang=typescript
 *
 * [1137] 第 N 个泰波那契数
 */

// @lc code=start
function tribonacci(n: number): number {
    const fibs: number[] = [];

    for (let index = 0; index <= n; index++) {
        if (index == 0) {
            fibs.push(0);
        } else if (index == 1 || index == 2) {
            fibs.push(1);
        } else {
            const element: number = fibs[index - 1] + fibs[index - 2] + fibs[index - 3];
            fibs.push(element);
            
        }
    }
     return fibs.pop() as number;
};
// @lc code=end

tribonacci(4);