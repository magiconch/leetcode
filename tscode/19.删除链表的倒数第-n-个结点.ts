/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第 N 个结点
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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if (head == null) {
        return null;
    }
    let iterator1: ListNode | null = head;
    let iterator2: ListNode | null = head;
    for (let index = 0; index < n; index++) {
        iterator2 = iterator2.next;
    }
    while(iterator2 != null && iterator2.next != null) {
        iterator2 = iterator2?.next;
        iterator1 = iterator1?.next;
    }

    if (iterator2 == null) {
        // 删除头节点
        return head?.next;
    }

    // swap
    if (iterator1 != null && iterator1.next != null) {
        iterator1.next = iterator1.next?.next;
    }
    return head;
    

};
// @lc code=end

