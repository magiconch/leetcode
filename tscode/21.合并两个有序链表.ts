/*
 * @lc app=leetcode.cn id=21 lang=typescript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let node1: ListNode | null = list1;
    let node2: ListNode | null = list2;
    if (node1 == null) {
        return node2;
    } else if (node2 == null) {
        return node1;
    }
    let newList: ListNode = new ListNode();
    
    while(node1 != null && node2 != null) {
        if (node1.val >= node2.val) {
            newList.next = node2;
            newList = newList.next; 
            node2 = node2.next;
        }
        

    }
};
// @lc code=end

