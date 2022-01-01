/*
 * @lc app=leetcode.cn id=64 lang=typescript
 *
 * [64] 最小路径和
 */

// @lc code=start
function minPathSum(grid: number[][]): number {

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
    let rowIndex: number = grid[0].length - 1;
    let columnIndex: number = grid.length - 1;
    return helpfunc(rowIndex, columnIndex);
};



// @lc code=end

