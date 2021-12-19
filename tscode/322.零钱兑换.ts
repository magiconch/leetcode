/*
 * @lc app=leetcode.cn id=322 lang=typescript
 *
 * [322] 零钱兑换
 */

// @lc code=start
function coinChange(coins: number[], amount: number): number {
    return solution1(coins, amount);
};

function solution1(coins: number[], amount: number): number {
    // base 
    if (amount == 0) {
        return 0;
    } else if (amount < 0) {
        return -1;
    }
    // 用来保存子问题的最小值
    let res: number = Number.MAX_VALUE;
    for (const coin of coins) {
        // 计算子问题的结果
        let sub = solution1(coins, amount - coin);
        // 子问题无解则跳过
        if (sub == -1) {
            continue;
        }
        // 在所有子问题中选择最小的那个
        res = Math.min(res, sub + 1);
    }
    return res == Number.MAX_VALUE ? -1 : res;
};

function solution2(coins: number[], amount: number): number {
    // base 
    if (amount == 0) {
        return 0;
    } else if (amount < 0) {
        return -1;
    }
    // 备忘录
    const memo: Map<number, number> = new Map();

    // 用来保存子问题的最小值
    let res: number = Number.MAX_VALUE;
    
    for (const coin of coins) {
        // 计算子问题的结果
        let sub = solution1(coins, amount - coin);
        // 子问题无解则跳过
        if (sub == -1) {
            continue;
        }
        // 在所有子问题中选择最小的那个
        res = Math.min(res, sub + 1);
    }
    return res == Number.MAX_VALUE ? -1 : res;
};

// @lc code=end

// solution1