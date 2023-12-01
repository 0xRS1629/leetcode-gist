/*
Q: Insertion Sort List

Given the head of a singly linked list, sort the list using insertion sort, and return the sorted list's head.

The steps of the insertion sort algorithm:

Insertion sort iterates, consuming one input element each repetition and growing a sorted output list.
At each iteration, insertion sort removes one element from the input data, finds the location it belongs 
within the sorted list and inserts it there.

It repeats until no input elements remain.
The following is a graphical example of the insertion sort algorithm. 
The partially sorted list (black) initially contains only the first element in the list. 
One element (red) is removed from the input data and inserted in-place into the sorted list with each iteration.

Example 1:

Input: head = [4,2,1,3]
Output: [1,2,3,4]

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val);
 *     this.next = (next===undefined ? null : next);
 * }
 */

var insertionSortList = function (head) {
  if (!head || !head.next) {
    return head;
  }

  const dummy = new ListNode(0);
  let current = head;

  while (current) {
    const nextNode = current.next;
    let prev = dummy;
    let currSorted = dummy.next;

    while (currSorted && currSorted.val < current.val) {
      prev = currSorted;
      currSorted = currSorted.next;
    }

    prev.next = current;
    current.next = currSorted;

    current = nextNode;
  }

  return dummy.next;
};
