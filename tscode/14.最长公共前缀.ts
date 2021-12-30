/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
    if (strs.length <= 0) {
        return "";
    }
    if (strs[0].length <= 0) {
        return "";
    }
    let i: number = 0;
    let result: string = '';
    while(i < strs[0].length) {
        let compareWord: string = strs[0][i];
        for (const iterator of strs) {
            if (compareWord != iterator[i]) {
                return result;
            }
        }
        result += compareWord;
        i++;
    }
    return result;

};
// @lc code=end

longestCommonPrefix(["a"]);