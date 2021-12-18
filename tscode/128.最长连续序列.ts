/*
 * @lc app=leetcode.cn id=128 lang=typescript
 *
 * [128] 最长连续序列
 */

// @lc code=start
function longestConsecutive(nums: number[]): number {
    if (nums.length == 0) {
        return 0;
    }
    nums = Array.from(new Set(nums));
    const sorted = nums.sort((a: number, b: number) => a - b);
    let count: number = 0;
    let counts: number[] = [];
    for (let index = 1; index < sorted.length; index++) {
        if (sorted[index] - sorted[index - 1] != 1) {
            counts.push(count);
            count = 0;
        } else {
            count++;
        } 
    }
    counts.push(count);
    let result = Math.max(...counts);
    return result + 1;
};

function unionfun() {

};
// @lc code=end

longestConsecutive([1,2,0,1])