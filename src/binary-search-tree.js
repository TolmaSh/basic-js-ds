const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {


  constructor() {
    this.newRoot = null;
  }


  root() {
    return this.newRoot;
  }

  add(data) {
    this.newRoot = addData(this.newRoot, data);

    function addData(node, data) {
      if (!node) return new Node(data);

      if (node.value === data) return node;

      if (data < node.data) {
        node.left = addData(node.left, data);
      } else {
        node.right = addData(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return hasData(this.newRoot, data);

    function hasData(node, data) {
      if (!node) return false;

      if (node.data === data) return true;

      return data < node.data
        ? hasData(node.left, data)
        : hasData(node.right, data);
    }
  }

  find(data ) {
    return findData(this.newRoot, data);

    function findData(node, data) {
      if (!node) return null;

      if (node.data === data) return node;

      return data < node.data
        ? findData(node.left, data)
        : findData(node.right, data);
    }
  }

  remove(data) {
    this.newRoot = removeNode(this.newRoot, data);

    function removeNode(node, data) {
      if (!node) return null;

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minInRight = node.right;
        while (minInRight.left) {
          minInRight = minInRight.left
        }

        node.data = minInRight.data;

        node.right = removeNode(node.right, minInRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.newRoot) return;

    let minNode = this.newRoot;
    while (minNode.left) {
      minNode = minNode.left;
    }
    return minNode.data;
  }

  max() {
    if (!this.newRoot) return;

    let maxNode = this.newRoot;
    while (maxNode.right) {
      maxNode = maxNode.right;
    }
    return maxNode.data
  }
}