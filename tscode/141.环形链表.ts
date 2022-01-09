/*
 * @lc app=leetcode.cn id=141 lang=typescript
 *
 * [141] 环形链表
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

// class ListNode {
//     val: number
//     next: ListNode | null
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = (val === undefined ? 0 : val)
//         this.next = (next === undefined ? null : next)
//     }
// }

function hasCycle(head: ListNode | null): boolean {
    if (head == null) {
        return false;
    } 
    let slowNode: ListNode = head;
    let fastNode: ListNode | null = head.next;

    if (fastNode == null) {
        return false;
    }
    
    while(fastNode != null && slowNode != fastNode) {
        if (slowNode != null && slowNode.next != null) {
            slowNode = slowNode.next;
        } else {
            return false;
        }
        if (fastNode.next == null || fastNode.next.next == null) {
            return false;
        } else {
            fastNode =  fastNode.next.next;
        }
    }
    return true;

};
// @lc code=end

// console.log(hasCycle([3,2,0,-4]));