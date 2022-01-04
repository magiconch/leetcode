/*
 * @lc app=leetcode.cn id=64 lang=typescript
 *
 * [64] 最小路径和
 */

// @lc code=start
function minPathSum(grid: number[][]): number {
    return solution_64_3(grid);
};

function solution_64_1(grid: number[][]): number {

    function helpfunc(i: number, j: number): number {
        if (i == 0 && j == 0) {
            return grid[i][j];
        }
        if (i < 0 || j < 0) {
            return Number.MAX_VALUE;
        }
        return Math.min(
            helpfunc(i - 1, j),
            helpfunc(i, j - 1)
            ) + grid[i][j];
    }
    const rowLen: number = grid.length;
    const columnLen: number = grid[0].length;
    return helpfunc(rowLen - 1, columnLen - 1);
};

function solution_64_2(grid: number[][]): number {
    const rowLen: number = grid.length;
    const columnLen: number = grid[0].length;
    const memos: number[][] = new Array(rowLen)
                                .fill(new Array(columnLen).fill(-1));

    function helpfunc(i: number, j: number): number {
        if (i == 0 && j == 0) {
            return grid[0][0];
        }
        if (i < 0 || j < 0) {
            return Number.MAX_VALUE;
        }
        memos[i][j] = Math.min(
            helpfunc(i - 1, j),
            helpfunc(i, j - 1)
            ) + grid[i][j];
        return memos[i][j];
    };
    
    return helpfunc(rowLen - 1, columnLen - 1);
};

function solution_64_3(grid: number[][]): number {
    const rowLen: number = grid.length;
    const columnLen: number = grid[0].length;
    const dp: number[][] = new Array(rowLen);

    for (let index = 0; index < dp.length; index++) {
        dp[index] = new Array(columnLen).fill(Number.MAX_VALUE);
    }

    dp[0][0] = grid[0][0];
    for (let i = 1; i < rowLen; i++) {
        dp[i][0] = dp[i - 1][0] + grid[i][0];
         
    }

    for (let j = 1; j < columnLen; j++) {
        dp[0][j] = dp[0][j - 1] + grid[0][j];
    }

    for (let i = 1; i < rowLen; i++) {
        for (let j = 1; j < columnLen; j++) {
            dp[i][j] = Math.min(
                dp[i - 1][j],
                dp[i][j - 1]
            ) + grid[i][j];
        }
    }

    return dp[rowLen - 1][columnLen - 1];
};

// @lc code=end

const result = minPathSum([[1,2,3],[4,5,6]]);

console.log(result);