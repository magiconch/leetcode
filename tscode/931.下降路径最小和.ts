/*
 * @lc app=leetcode.cn id=931 lang=typescript
 *
 * [931] 下降路径最小和
 */

// @lc code=start
function minFallingPathSum(matrix: number[][]): number {
    return solution_931_2(matrix);
};

function solution_931_1(matrix: number[][]): number {
    const matrixLen = matrix.length;
    const memo: number[][] = new Array(matrixLen);

    for (let index = 0; index < memo.length; index++) {
        memo[index] = new Array(matrixLen).fill(Number.MAX_VALUE);
    }

    function dp(i: number, j: number): number {
        if (i < 0 || j < 0 || j > matrixLen - 1) {
            return Number.MAX_VALUE;
        }

        if (i == 0) {
            return matrix[0][j];
        }

        memo[i][j] =  Math.min(
            dp(i - 1, j - 1),
            dp(i - 1, j),
            dp(i - 1, j + 1)
        ) + matrix[i][j];

        return memo[i][j];
    }
    let result = Number.MAX_VALUE;
    for (let index = 0; index < matrixLen; index++) {
        const element = dp(matrixLen - 1, index);
        if (element < result) {
            result = element;
        }
        
    }
    return result;
}

function solution_931_2(matrix: number[][]): number {
    const matrixLen = matrix.length;
    const memo: number[][] = new Array(matrixLen);

    function getValue(i: number, j: number): number {
        if (i < 0 || j < 0 || i >= matrixLen || j >= matrixLen) {
            return Number.MAX_VALUE;
        }
        return memo[i][j];
    }

    for (let index = 0; index < memo.length; index++) {
        memo[index] = new Array(matrixLen).fill(Number.MAX_VALUE);
    }

    for (let index = 0; index < matrixLen; index++) {
        memo[0][index] = matrix[0][index];
    }

    // 储存最后的结果
    let result = Number.MAX_VALUE;

    for (let i = 1; i < matrixLen; i++) {
        for (let j = 0; j < matrixLen; j++) {
            memo[i][j] = Math.min( 
                getValue(i - 1, j - 1),
                getValue(i - 1, j),
                getValue(i - 1, j + 1)
                ) + matrix[i][j];
        }
    }
    
    for (let index = 0; index < matrixLen; index++) {
        const element = memo[matrixLen - 1][index]
        if (element < result) {
            result = element;
        }
        
    }
    return result;
}

// @lc code=end

console.log( minFallingPathSum( [[2,1,3],[6,5,4],[7,8,9]]));