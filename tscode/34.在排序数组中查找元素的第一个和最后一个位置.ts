/*
 * @lc app=leetcode.cn id=34 lang=typescript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
function searchRange(nums: number[], target: number): number[] {
    return solution_34_2(nums, target);
};

/**
 * Step 1 先使用二分找到任意一个target所在的位置
 * Step 2 再从该点开始往外进行单步遍历
 */
function solution_34_1(nums: number[], target: number): number[] {
    // Step 1:
    let left: number = 0; let right: number = nums.length - 1;
    let k: number = -1;

    while (left <= right) {
        const mid: number = Math.round((left + right) / 2);
        if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            k = mid;
            break;
        }
    }

    if (k == -1) {
        return [-1, -1];
    }

    // Step 2:

    let targetLeft: number = k; let targetRight: number = k;

    while (nums[targetLeft - 1] == target || nums[targetRight + 1] == target) {
        if (nums[targetLeft - 1] == target) {
            targetLeft--;
        }
        if (nums[targetRight + 1] == target) {
            targetRight++;
        }
    }

    return [targetLeft, targetRight];

}

/**
 * 用一次二分法一次性找到target的存在区间
 * 
 * 如果要找到target的左右边界存在三种情况
 * - nums中存在target
 * - nums中不存在target
 * - target > nums[n-1] or target < nums[0]
 */
function solution_34_2(nums: number[], target: number): number[] {

    let left: number = 0; let right: number = nums.length - 1;
    let targetLeft: number = 0;

    // 查找target的左边界
    while (left <= right) {
        const mid: number = Math.round((left + right) / 2);
        if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            // 当相等的时候继续左移
            right = mid - 1;
        }
    }

    if (nums[left] == target) {
        targetLeft = left;
    } else {
        return [-1, -1]
    }

    // init
    left = 0; right = nums.length - 1;
    while (left <= right) {
        const mid: number = Math.round((left + right) / 2);
        if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            // 当相等的时候继续右移
            left = mid + 1;
        }
    }
    
    if (nums[right] == target) {
        return[targetLeft, right];
    } else {
        return [-1, -1]
    }

}

// @lc code=end

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));