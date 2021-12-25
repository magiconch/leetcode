/*
 * @lc app=leetcode.cn id=72 lang=typescript
 *
 * [72] 编辑距离
 */

// @lc code=start
function minDistance(word1: string, word2: string): number {
    return soultion_72_1(word1, word2);
};

function soultion_72_1(word1: string, word2: string): number {
    // 我们需要明确的是，我们的编辑距离是相对于word1进行的编辑
    function dp(i:number, j: number): number {
        if (i == -1) { // 表明word1已经遍历完成
            return j + 1; // 把word2剩下的所有字符插入到word1
        }
        if (j == -1) { // 表明word2已经遍历完成
            return i + 1; // 把word1剩下的所有字符删除
        }

        if (word1[i] == word2[j]) {
            return dp(i - 1, j - 1);
        } else {
            return Math.min(
                dp(i - 1, j), // 删除当前的字符， word1的指针往前移动
                dp(i, j - 1), // 添加一个字符到word1，word2的指针往前移动
                dp(i - 1, j - 1) // 替换当前字符，指针都往前移动
            ) + 1;
        }
    }
    return dp(word1.length - 1, word2.length - 1);
}
// @lc code=end

