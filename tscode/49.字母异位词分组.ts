/*
 * @lc app=leetcode.cn id=49 lang=typescript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
function groupAnagrams(strs: string[]): string[][] {
    const unique: string[] = [];
    const result: string[][] = [];
    const groupHash: Map<number, boolean> = new Map();
    for (let index = 0; index < strs.length; index++) {
        const element = strs[index];
        const res = element.split('').sort().join('');
        unique.push(res);
    }
    for (let index = 0; index < unique.length; index++) {
        let temp: string[] = [];
        const element = unique[index];
        if (!groupHash.has(index)) {
            temp.push(strs[index]);
            groupHash.set(index, true);
            for (let j = index + 1; j < unique.length; j++) {
                if (element == unique[j] && !groupHash.has(j)) {
                    temp.push(strs[j]);
                    groupHash.set(j, true);
                }
            }
            result.push(temp);
            temp = [];
        }
        
        
    }
    return result;

};
// @lc code=end

groupAnagrams(["eat","tea","tan","ate","nat","bat"])