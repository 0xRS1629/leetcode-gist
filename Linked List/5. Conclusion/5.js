/*
Q: Rotate List

Given the head of a linked list, rotate the list to the right by k places.

Example 1:

Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val);
 *     this.next = (next===undefined ? null : next);
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head || k === 0) {
    return head;
  }

  // Step 1: Find the length of the linked list
  let length = 1;
  let tail = head;
  while (tail.next !== null) {
    length++;
    tail = tail.next;
  }

  // Step 2: Update k to k % length
  k = k % length;

  // Step 3: If k is 0, no rotation is needed
  if (k === 0) {
    return head;
  }

  // Step 4: Traverse to the (length - k - 1)th node
  let newTail = head;
  for (let i = 1; i < length - k; i++) {
    newTail = newTail.next;
  }

  // Step 5: Update pointers to rotate the list
  let newHead = newTail.next;
  newTail.next = null;
  tail.next = head;

  return newHead;
};
