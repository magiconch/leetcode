/*
 * @lc app=leetcode.cn id=46 lang=typescript
 *
 * [46] 全排列
 */

// @lc code=start
function permute(nums: number[]): number[][] {
    
    const res: number[][] = [];
    if (nums.length < 2) {
        res.push(nums);
        return res
    }
    for (let i = 0; i < nums.length; i++) {   
        // 将当前数取出来 
        const cur = nums[i];
        // 对于数组参数来说,这一步很重要，必须要克隆一份原数组来操作，不能修改到源数组
        // 取出剩下的数组元素，再次提醒，一定要克隆源数组
        const other = [].concat(nums).splice(0, i).concat([].concat(nums).splice(i + 1, nums.length));
        // 将取出来的其余数组元素，递归进行全排列
        const newArr = permute(other)
        // 将排列好的数组元素，合并当前数
        for (let j = 0; j < newArr.length; j++) {
            res.push([cur, ...newArr[j]])
        }
    }
    return res;
  
};
// @lc code=end

