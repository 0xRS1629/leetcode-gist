/*
Q: Flatten a Multilevel Doubly Linked List

You are given a doubly linked list, which contains nodes that have a next pointer, a previous pointer, and an additional child pointer. 
This child pointer may or may not point to a separate doubly linked list, also containing these special nodes. 
These child lists may have one or more children of their own, and so on, to produce a multilevel data structure as shown in the example below.

Given the head of the first level of the list, flatten the list so that all the nodes appear in a single-level, doubly linked list. 
Let curr be a node with a child list. The nodes in the child list should appear after curr and before curr.next in the flattened list.

Return the head of the flattened list. The nodes in the list must have all of their child pointers set to null.

Example 1:

Input: head = [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]
Output: [1,2,3,7,8,11,12,9,10,4,5,6]
Explanation: The multilevel linked list in the input is shown.
After flattening the multilevel linked list it becomes:
*/

/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
  if (!head) {
    return null;
  }

  let current = head;

  while (current !== null) {
    if (current.child !== null) {
      const childHead = flatten(current.child);
      const childTail = findTail(childHead);

      const nextNode = current.next;
      current.next = childHead;
      childHead.prev = current;

      if (nextNode !== null) {
        childTail.next = nextNode;
        nextNode.prev = childTail;
      }

      current.child = null;
    }

    current = current.next;
  }

  return head;
};

var findTail = function (head) {
  let current = head;
  while (current.next !== null) {
    current = current.next;
  }
  return current;
};
