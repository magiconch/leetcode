/*
 * @lc app=leetcode.cn id=162 lang=typescript
 *
 * [162] 寻找峰值
 */

// @lc code=start
function findPeakElement(nums: number[]): number {
    return solution3(nums);
    // return nums.findIndex((element) => element == Math.max(...nums));
};



function solution2(nums:number[]): number {
    const n = nums.length;
    let index: number = Math.ceil(nums.length / 2);

    function getVal(index:number): number {
        if (index == -1 || index == n) {
            return -Number.MAX_VALUE;
        } else {
            return nums[index];
        }
    }

    while(getVal(index) < getVal(index + 1) || getVal(index) < getVal(index - 1)) {
        if (getVal(index) < getVal(index + 1)) {
            index += 1; // 往右移动，爬坡
        } else {
            index -= 1; // 往左移动，下坡
        }
    }
    return index;
}

function solution3(nums:number[]): number {
    const n = nums.length;
    if (n == 0) {
        return 0;
    }
    let left: number = 0;
    let right: number = nums.length - 1;
    // let mid: number = Math.ceil( (nums.length - 1) / 2);

    while( left < right) {
        let mid = left + right + 1;
        if (nums[mid] > nums[mid + 1]) {
            left = mid;
        } else {
            right = mid;
        }
    }
    return right;
}

// @lc code=end

findPeakElement([2,1])