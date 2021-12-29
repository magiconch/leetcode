/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
    let str = '', i = 0;
    while(strs[0][i]){
        for(let s of strs){
            if(s[i] !== strs[0][i]){
                return str;
            }
        }
        str += strs[0][i];
        i++;
    }
    return str;

};
// @lc code=end

