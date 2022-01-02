/*
 * @lc app=leetcode.cn id=64 lang=typescript
 *
 * [64] 最小路径和
 */

// @lc code=start
function minPathSum(grid: number[][]): number {
    return solution_64_2(grid);
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

// @lc code=end

const result = minPathSum([
    [3,8,6,0,5,9,9,6,3,4,0,5,7,3,9,3],
    [0,9,2,5,5,4,9,1,4,6,9,5,6,7,3,2],
    [8,2,2,3,3,3,1,6,9,1,1,6,6,2,1,9],
    [1,3,6,9,9,5,0,3,4,9,1,0,9,6,2,7],
    [8,6,2,2,1,3,0,0,7,2,7,5,4,8,4,8],
    [4,1,9,5,8,9,9,2,0,2,5,1,8,7,0,9],
    [6,2,1,7,8,1,8,5,5,7,0,2,5,7,2,1],
    [8,1,7,6,2,8,1,2,2,6,4,0,5,4,1,3],
    [9,2,1,7,6,1,4,3,8,6,5,5,3,9,7,3],
    [0,6,0,2,4,3,7,6,1,3,8,6,9,0,0,8],
    [4,3,7,2,4,3,6,4,0,3,9,5,3,6,9,3],
    [2,1,8,8,4,5,6,5,8,7,3,7,7,5,8,3],
    [0,7,6,6,1,2,0,3,5,0,8,0,8,7,4,3],
    [0,4,3,4,9,0,1,9,7,7,8,6,4,6,9,5],
    [6,5,1,9,9,2,2,7,4,2,7,2,2,3,7,2],
    [7,1,9,6,1,2,7,0,9,6,6,4,4,5,1,0],
    [3,4,9,2,8,3,1,2,6,9,7,0,2,4,2,0],
    [5,1,8,8,4,6,8,5,2,4,1,6,2,2,9,7]]
    );

console.log(result);