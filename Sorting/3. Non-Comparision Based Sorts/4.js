/*
Q: Top K Frequent Elements

Given an integer array nums and an integer k, return the k most frequent elements. 
You may return the answer in any order.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  // Step 1: Create a frequency map
  const frequencyMap = new Map();
  for (const num of nums) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  // Step 2: Create a min heap (priority queue)
  const minHeap = new MinHeap();

  // Step 3: Populate the min heap with the k most frequent elements
  frequencyMap.forEach((frequency, num) => {
    minHeap.push({ num, frequency });

    if (minHeap.size() > k) {
      minHeap.pop();
    }
  });

  // Step 4: Extract the elements from the min heap
  const result = [];
  while (!minHeap.isEmpty()) {
    result.unshift(minHeap.pop().num); // Unshift to maintain the order
  }

  return result;
};

// MinHeap implementation
class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }

    const root = this.heap[0];
    const lastElement = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = lastElement;
      this.heapifyDown();
    }

    return root;
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  heapifyUp() {
    let currentIndex = this.size() - 1;

    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);

      if (
        this.heap[currentIndex].frequency < this.heap[parentIndex].frequency
      ) {
        this.swap(currentIndex, parentIndex);
        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  }

  heapifyDown() {
    let currentIndex = 0;

    while (true) {
      const leftChildIndex = 2 * currentIndex + 1;
      const rightChildIndex = 2 * currentIndex + 2;
      let smallestChildIndex = currentIndex;

      if (
        leftChildIndex < this.size() &&
        this.heap[leftChildIndex].frequency <
          this.heap[smallestChildIndex].frequency
      ) {
        smallestChildIndex = leftChildIndex;
      }

      if (
        rightChildIndex < this.size() &&
        this.heap[rightChildIndex].frequency <
          this.heap[smallestChildIndex].frequency
      ) {
        smallestChildIndex = rightChildIndex;
      }

      if (smallestChildIndex !== currentIndex) {
        this.swap(currentIndex, smallestChildIndex);
        currentIndex = smallestChildIndex;
      } else {
        break;
      }
    }
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
}
