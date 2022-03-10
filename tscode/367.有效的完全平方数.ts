/*
 * @lc app=leetcode.cn id=367 lang=typescript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
function isPerfectSquare(num: number): boolean {
    if (num == 1) {
        return true;
    }
    let left: number = 2;
    let right: number = num - 1;
    while (left <= right) {
        const mid: number = Math.round((left + right)/2);
        const temp: number = mid * mid;
        if (temp > num) {
            right = mid - 1;
        } else if (temp < num) {
            left = mid + 1;
        } else {
            return true;
        }
        
    }

    return false;
};
// @lc code=end

console.log(isPerfectSquare(4));