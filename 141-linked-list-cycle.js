/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  while (head && head.next) {
    if (head.seen) {
      return true;
    }

    head.seen = true;
    head = head.next;
  }

  return false;
};
