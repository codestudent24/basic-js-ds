const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  root() {
    if (this.rootNode != null) {
      return this.rootNode;
    } else {
      return null;
    }
  }

  add(num) {
    if (this.rootNode  != null) {
      let link = this.rootNode;

      while (link != null) {
        console.log('add while')
        if (num > link.data) {
          if (link.nextNode != null) {
            link = link.nextNode;
          } else {
            link.nextNode = {
              data: num,
              nextNode: null,
              prevNode: null,
              parentNode: link
            }
            break;
          }
        } else if (num < link.data) {
          if (link.prevNode  != null) {
            link = link.prevNode;
          } else {
            link.prevNode = {
              data: num,
              nextNode: null,
              prevNode: null,
              parentNode: link
            }
            break;
          }
        }
      }

    } else {
      this.rootNode = {
      data: num,
      nextNode: null,
      prevNode: null,
      parentNode: null}
    }
  }

  has(num) {
    if (this.rootNode == null) return false;
    let link = this.rootNode;
    while (link != null) {
      console.log('has while')
      if (link.data === num) return true;
      if (num > link.data) {
        if (link.nextNode == null) return false;
        link = link.nextNode;
      }
      if (num < link.data) {
        if (link.prevNode == null) return false;
        link = link.prevNode;
      }
    }
    return false;
  }

  find(num) {
    if (this.rootNode == null) return null;
    let link = this.rootNode;
    while (link != null) {
      console.log('find while')
      if (link.data === num) return link;
      if (num > link.data) {
        if (link.nextNode == null) return null;
        link = link.nextNode;
      }
      if (num < link.data) {
        if (link.prevNode == null) return null;
        link = link.prevNode;
      }
    }
    return null;
  }

  remove(num) {
    this.rootNode = removeNode(this.rootNode, num);

    function removeNode(node, value) {
      if (!node) {
        return null;
      }

      if (value < node.data) {
        node.prevNode = removeNode(node.prevNode, value);
        return node;
      } else if (node.data < value) {
        node.nextNode = removeNode(node.nextNode, value);
        return node;
      } else {
        if (!node.prevNode && !node.nextNode) {
          return null;
        }

        if (!node.prevNode) {
          node = node.nextNode;
          return node;
        }

        if (!node.nextNode) {
          node = node.prevNode;
          return node;
        }

        let minFromRight = node.nextNode;
        while (minFromRight.prevNode) {
          minFromRight = minFromRight.prevNode;
        }
        node.data = minFromRight.data;
        node.nextNode = removeNode(node.nextNode, minFromRight.data);

        return node;
      }
    }
  }

  min() {
    if (this.rootNode == null) return null;
    let link = this.rootNode;
     while (link != null) {
      console.log('min while')
      if (link.prevNode == null) {
        return link.data;
      } else {
        link = link.prevNode;
      }
     }
  }

  max() {
    if (this.rootNode == null) return null;
    let link = this.rootNode;
     while (link != null) {
      console.log('max while')
      if (link.nextNode == null) {
        return link.data;
      } else {
        link = link.nextNode;
      }
     }
  }
}


module.exports = {
  BinarySearchTree
};