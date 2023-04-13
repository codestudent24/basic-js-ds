const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {

  push(element) {
    console.dir('element', element)
    let counter = 0;
    while (this[counter] != null) {
      counter++;
    }
    this[counter] = element;
    console.dir(this)
  }

  pop() {
    let counter = 0;
    while (this[counter] != null) {
      counter++;
    }
    const result = this[counter-1];
    this[counter-1] = null;
    console.dir(this);
    return result;
  }

  peek() {
    let counter = 0;
    while (this[counter] != null) {
      counter++;
    }
    return this[counter-1];
  }
}

module.exports = {
  Stack
};
