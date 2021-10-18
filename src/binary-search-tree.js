const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
  constructor() {
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot;
  }

  add(data) {
    if (!this.treeRoot) {
      this.treeRoot = new TreeNode(data)
    } else {
      let node = this.treeRoot;
      let newNode = new TreeNode(data)
      while (node) {
        if (data > node.data) {
          if (!node.right) {
            break
          }
          node = node.right
        } else {
          if (!node.left) {
            break
          }
          node = node.left
        }
      }
      if (data > node.data) {
        node.right = newNode
      } else {
        node.left = newNode
      }
    }
  }

  has(data) {
    let currentNode = this.treeRoot
    while (currentNode) {
      if (data === currentNode.data) {
        return true
      }
      if (data < currentNode.data) {
        currentNode = currentNode.left
      } else {
        currentNode = currentNode.right
      }
    }
    return false
  }

  find(data) {
    let currentNode = this.treeRoot;
    while (currentNode) {
      if (data === currentNode.data) {
        return currentNode
      }
      if (data < currentNode.data) {
        currentNode = currentNode.left
      } else {
        currentNode = currentNode.right
      }
    }
    return null
  }

 

  remove(data) {
    const removeNode = function(node, data) {
      if (node == null) {
        return null;
      }
      if (data == node.data) {
      
        if (node.left == null && node.right == null) {
          return null;
        }
       
        if (node.left == null) {
          return node.right;
        }
   
        if (node.right == null) {
          return node.left;
        }
       
        var tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    }
    this.treeRoot = removeNode(this.treeRoot, data);
  }

  min() {
    if (!this.treeRoot) return null;
    else {
      let currentNode = this.treeRoot

      while (currentNode.left) {
        currentNode = currentNode.left
      }
      return currentNode.data
    }

  }

  max() {
    if (!this.treeRoot) return null;
    let currentNode = this.treeRoot
    while (currentNode.right) {
      currentNode = currentNode.right
    }
    return currentNode.data
  }

}

class TreeNode {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}