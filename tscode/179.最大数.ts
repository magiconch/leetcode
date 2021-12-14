/*
 * @lc app=leetcode.cn id=179 lang=typescript
 *
 * [179] 最大数
 */

// @lc code=start
function largestNumber(nums: number[]): string {
  
    // 冒泡排序
    // for (let index = nums.length - 1; index >= 0; index--) {
    //     for (let j = 0; j < index; j++) {
    //         const left = nums[j + 1].toString() +  nums[j].toString();
    //         const right = nums[j].toString() +  nums[j + 1].toString();
    //         if (left > right) {
    //             const temp = nums[j + 1];
    //             nums[j + 1] = nums[j];
    //             nums[j] = temp;
    //         }
    //     }

    // }

    nums.sort( (a: number, b: number) => {
        const str1 = a.toString();
        const str2 = b.toString();
        return Number(str1 + str2) > Number(str2 + str1) ? -1 : 1;
    })

    while(nums[0] == 0 && nums.length > 1) {
        nums.shift();
    }

    const result: string = nums.join('');
    return result;
};
// @lc code=end

largestNumber([0,0]);