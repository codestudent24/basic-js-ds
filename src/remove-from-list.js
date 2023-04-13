const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let normalList = [];
  let current = l;

  while (current) {
    if (current.value !== k) {
      normalList.push(current.value)
    }
    current = current.next
  }

  const newList = new ListNode(normalList[0])

  let i=1;
  current = newList;
  while (i<normalList.length) {
    current.next = new ListNode(normalList[i]);
    i++;
    current = current.next;
  }

  return newList;
}

module.exports = {
  removeKFromList
};
