/*
 * @lc app=leetcode.cn id=33 lang=typescript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
function search(nums: number[], target: number): number {
    
    return solution_33_2(nums, target);

};

function solution_33_1(nums: number[], target: number): number {
    let k = nums.length - 1;
    for (let index = 0; index < nums.length - 1; index++) {
        const element = nums[index];
        if (element > nums[index + 1]) {
            //  This is the k
            k = index;
            break;
        }
    }

    if (k == nums.length - 1) {
        helpFunc(0, k);
    }

    // 这里把一个数组拆分成两个之后各自使用二分查找就行了

    function helpFunc(l: number, r: number): number {
        let left: number = l;
        let right: number = r;
        while(left <= right) {
            const mid = Math.round((left + right)/2);
            if (nums[mid] > target) {
                right = mid - 1;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                return mid;
            }
        }
        return -1;
    }

    /**
     * 
     */

    const leftResult = helpFunc(0, k);
    if (leftResult != - 1) {
        return leftResult;
    }
    const rightResult = helpFunc(k + 1, nums.length - 1);
    if (rightResult != - 1) {
        return rightResult;
    }
    

    return -1;

};

function solution_33_2(nums: number[], target: number): number {
    /**
     * [二分]的本质是两段性，并非单调性。
     * 只要一段满足某个性质，另一段不满足某个性质，就可以用[二分]
     */
    let left = 0; let right = nums.length - 1;
    // 这里的判断标准是左侧大于nums[0],右侧小于nums[0]
    while(left <= right) {
        const mid: number = Math.round((left + right)/2);
        if (nums[mid] >= nums[0]) {
            left = mid + 1;
        } else if (nums[mid] < nums[0]) {
            right = mid - 1;
        }
    }

    const k: number = right;

    function helpFunc(l: number, r: number): number {
        let left: number = l;
        let right: number = r;
        while(left <= right) {
            const mid = Math.round((left + right)/2);
            if (nums[mid] > target) {
                right = mid - 1;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                return mid;
            }
        }
        return -1;
    }
    /**
     * 
     */

    const leftResult = helpFunc(0, k);
    if (leftResult != - 1) {
        return leftResult;
    }
    const rightResult = helpFunc(k + 1, nums.length - 1);
    if (rightResult != - 1) {
        return rightResult;
    }
    

    return -1;

};

// @lc code=end

// console.log(search([4,5,6,7,0,1,2], 0));