/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isMatch(s1: string | undefined, s2: string): boolean {
    if (s1 == '(' && s2 == ')') {
        return true;
    }
    if (s1 == '[' && s2 == ']') {
        return true;
    }
    if (s1 == '{' && s2 == '}') {
        return true;
    }
    return false;
}

function isValid(s: string): boolean {
    const bracketStack: string[] = [];
    for (const iterator of s.split('')) {
        if (iterator == '(' || iterator == '[' || iterator == '{') {
            bracketStack.push(iterator);
        } else {
            if (!isMatch(bracketStack.pop(), iterator)) {
                return false;
            }
        }
        

    }
    return bracketStack.length == 0;

};
// @lc code=end

