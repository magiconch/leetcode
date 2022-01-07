/*
 * @lc app=leetcode.cn id=72 lang=typescript
 *
 * [72] 编辑距离
 */

// @lc code=start
function minDistance(word1: string, word2: string): number {
    return soultion_72_3(word1, word2);
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

function soultion_72_2(word1: string, word2: string): number {
    // 我们需要明确的是，我们的编辑距离是相对于word1进行的编辑

    // 备忘录
    const memo: Map<number[], number> = new Map();
    function dp(i:number, j: number): number {
        if (i == -1) { // 表明word1已经遍历完成
            return j + 1; // 把word2剩下的所有字符插入到word1
        }
        if (j == -1) { // 表明word2已经遍历完成
            return i + 1; // 把word1剩下的所有字符删除
        }

        if (memo.has([i, j])) {
            return memo.get([i, j]) as number;
        }

        if (word1[i] == word2[j]) {
            memo.set([i, j], dp(i - 1, j - 1));
        } else {
                memo.set([i, j], Math.min(
                    dp(i - 1, j), // 删除当前的字符， word1的指针往前移动
                    dp(i, j - 1), // 添加一个字符到word1，word2的指针往前移动
                    dp(i - 1, j - 1) // 替换当前字符，指针都往前移动
                ) + 1);
        }
        return memo.get([i, j]) as number;
    }
    return dp(word1.length - 1, word2.length - 1);
}

function soultion_72_3(word1: string, word2: string): number {
    const rowLen: number = word1.length + 1;
    const colLen: number = word2.length + 1;
    const memo: number[][] = new Array(rowLen);
    for (let i = 0; i < rowLen; i++) {
        memo[i] = new Array(colLen).fill(Number.MAX_VALUE);
        memo[i][0] = i;
    }

    for (let j = 0; j < colLen; j++) {
        memo[0][j] = j;
    }

    for (let i = 1; i < rowLen; i++) {
        for (let j = 1; j < colLen; j++) {
            if (word1[i - 1] == word2[j - 1]) {
                memo[i][j] = memo[i - 1][j - 1];
            } else {
                memo[i][j] = Math.min(
                    memo[i - 1][j], 
                    memo[i][j - 1], 
                    memo[i - 1][j - 1]
                    ) + 1;
            }
            
            
        }
        
    }
    return memo[rowLen - 1][colLen - 1];
 
}
// @lc code=end

console.log( minDistance("horse", "ros") );
