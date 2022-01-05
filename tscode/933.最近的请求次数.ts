/*
 * @lc app=leetcode.cn id=933 lang=typescript
 *
 * [933] 最近的请求次数
 */

// @lc code=start
class MyPing {
    public readonly timeStamp: number = 0;

    constructor(timeStamp: number) {
        this.timeStamp = timeStamp;
    }
}


class RecentCounter {
    private readonly _pingList: MyPing[] = [];
    constructor() {
        this._pingList = [];
    }

    private deleteOutdatedItem(timeStamp: number): void {
        if (this._pingList.length <= 0) { 
            return;
        }

        for (let index = 0; index < this._pingList.length; index++) {
            if (timeStamp - this._pingList[index].timeStamp > 3000) {
                this._pingList.splice(index, this._pingList.length - index)
                return;
            }
            
        }
    }

    ping(t: number): number {
        const currentStamp = t;
        this._pingList.unshift(new MyPing(currentStamp));
        this.deleteOutdatedItem(currentStamp);
        return this._pingList.length;
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
// @lc code=end