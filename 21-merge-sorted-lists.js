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
  if (list1 === null) {
    return list2;
  } else if (list2 === null) {
    return list1;
  }

  let current1 = list1;
  let current2 = list2;
  let newHead;
  let pointer;

  while (current1 !== null && current2 !== null) {
    if (current1.val <= current2.val) {
      if (newHead === undefined) {
        newHead = current1;
        pointer = current1;
      } else {
        pointer.next = current1;
        pointer = pointer.next;
      }

      current1 = current1.next;
    } else {
      if (newHead === undefined) {
        newHead = current2;
        pointer = current2;
      } else {
        pointer.next = current2;
        pointer = pointer.next;
      }

      current2 = current2.next;
    }
  }

  while (current1 !== null || current2 !== null) {
    if (current1 !== null) {
      pointer.next = current1;
      current1 = current1.next;
    } else {
      pointer.next = current2;
      current2 = current2.next;
    }

    pointer = pointer.next;
  }

  return newHead;
};
