/*
Q: Remove Linked List Elements

Solution
Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, 
and return the new head.

Example 1:

Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.next = (next === undefined ? null : next);
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  // Create a dummy node to handle the case where the head needs to be removed
  const dummy = new ListNode(0);
  dummy.next = head;

  let current = dummy;

  // Iterate through the list and remove nodes with the target value
  while (current.next !== null) {
    if (current.next.val === val) {
      current.next = current.next.next; // Skip the node with the target value
    } else {
      current = current.next;
    }
  }

  return dummy.next; // Return the modified head
};
