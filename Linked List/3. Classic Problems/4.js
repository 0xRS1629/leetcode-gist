/*
Q: Palindrome Linked List

Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

Example 1:

Input: head = [1,2,2,1]
Output: true

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
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (!head || !head.next) {
    return true;
  }

  // Find the middle of the linked list
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Reverse the second half of the linked list
  let reversedSecondHalf = reverseLinkedList(slow);

  // Compare the first half with the reversed second half
  while (reversedSecondHalf !== null) {
    if (head.val !== reversedSecondHalf.val) {
      return false;
    }
    head = head.next;
    reversedSecondHalf = reversedSecondHalf.next;
  }

  return true;
};

/**
 * Helper function to reverse a linked list
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseLinkedList = function (head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    let nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }

  return prev;
};
