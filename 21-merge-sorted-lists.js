/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let current1 = list1;
  let current2 = list2;

  let newHead = new ListNode();
  let pointer = newHead;

  while (current1 && current2) {
    if (current1.val <= current2.val) {
      pointer.next = current1;
      current1 = current1.next;
    } else {
      pointer.next = current2;
      current2 = current2.next;
    }

    pointer = pointer.next;
  }

  pointer.next = current1 || current2;

  return newHead.next;
};
