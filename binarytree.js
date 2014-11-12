function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
  this.show = show;
  this.showWithCount = showWithCount;
  this.count = 1;
}

function show() {
  return this.data;
}

function showWithCount() {
  var display = this.data + " : " + this.count;
  return display;
}

function BST() {
  this.root = null;
  this.insert = insert;
  this.inOrder = inOrder;
  this.getMin = getMin;
  this.getMax = getMax;
  this.find = find;
  this.update = update;
  this.inOrderCount = inOrderCount;
//   this.remove = remove;
//   this.removeNode = removeNode;
}

function insert(data) {
  var n = new Node(data, null, null);
  if (this.root === null) {
    this.root = n;
  } else {
    var current = this.root;
    var parent;
    while (true) {
      parent = current;
      if (data < current.data) {
        current = current.left;
        if (current === null) {
          parent.left = n;
          break;
        }
      } else {
        current = current.right;
        if (current === null) {
          parent.right = n;
          break;
        }
      }
    }
  }
}

function inOrder(node) {
  if (node !== null) {
    inOrder(node.left);
    console.log(node.show() + " ");
    inOrder(node.right);
  }
}

function preOrder(node) {
  if (node !== null) {
    console.log(node.show() + " ");
    preOrder(node.left);
    preOrder(node.right);
  }
}

function postOrder(node) {
  if (node !== null) {
    postOrder(node.left);
    postOrder(node.right);
    console.log(node.show() + " ");
  }
}

function getMin() {
  var current = this.root;
  while (current.left !== null) {
    current = current.left;
  }
  return current.data;
}

function getSmallest(node) {
  var current = this.root;
  while (current.left !== null) {
    current = current.left;
  }
  return current.data;
}

function getMax() {
  var current = this.root;
  while (current.right !== null) {
    current = current.right;
  }
  return current.data;
}

function find(data) {
  var current = this.root;
  while (current && current.data != data) {
    if (data < current.data) {
      current = current.left;
    }
    else {
      current = current.right;
    }
  }
  return current;
}

// function remove(data) {
//   root = removeNode(this.root, data);
// }
//
// function removeNode(node, data) {
//   if (node === null) {
//     return null;
//   }
//   if (data === node.data) {
//     // node has no children
//     if (node.left === null && node.right === null) {
//       return null;
//     }
//     //node has no left child
//     if (node.left === null) {
//       return node.right;
//     }
//     //node has no right child
//     if (node.right === null) {
//       return node.left;
//     }
//     //node has two children
//     var tempNode = getSmallest(node.right);
//     node.data = tempNode.data;
//     node.right = this.removeNode(node.right, tempNode.data);
//     return node;
//   }
//   else if (data < node.data) {
//     node.left = this.removeNode(node.left, data);
//     return node;
//   }
//   else {
//     node.right = this.removeNode(node.right, data);
//     return node;
//   }
// }

function nodeCounter(node, count) {
  if (node !== null) {
    count = nodeCounter(node.left, count);
    count = nodeCounter(node.right, count);
    count++;
  }
  return count;
}

function edgeCounter(node) {
  return nodeCounter(node, 0) - 1;
}

function update(data) {
  var p = this.find(data);
  p.count++;
  return p;
}

function inOrderCount(node) {
  if (node !== null) {
    inOrderCount(node.left);
    console.log(node.showWithCount());
    inOrderCount(node.right);
  }
}

var nums = new BST();

nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);

console.log("Inorder traversal: ");
inOrder(nums.root);
console.log("Preorder traversal: ");
preOrder(nums.root);
console.log("Postorder traversal: ");
postOrder(nums.root);
console.log("Min value: " + nums.getMin());
console.log("Max value: " + nums.getMax());
console.log("Find 22 in BST: ");
console.log(nums.find(22));
console.log("Number of nodes: " + nodeCounter(nums.root, 0));
console.log("Number of edges: " + edgeCounter(nums.root));

var poem = "five steps, and i'm near you " +
"one touch is all you got to do " +
"not one thing you're gonna say " +
"just that one touch is okay. " +

"a dozen of matters to talk " +
"just one word would make it fine " +
"worried six times and more " +
"i could only listen to four. " +

"a room for fifty, a seat for one " +
"you let them all in, and you're left with none " +
"in one heart, for two people " +
"one would rejoice, the other would struggle. " +

"for places and times and faces " +
"that's just all for one " +
"never give in for another " +
"if you got none under cover.";

var poemArray = poem.replace(/[\.,'-\/#!$%\^&\*;:{}=\-_`~()]/g, "").split(" ");
var word = new BST();
for (var i = 0; i < poemArray.length; i++) {
  var p = poemArray[i];
  var w = word.find(p);
  if (w === null) {
    word.insert(p);
  }
  else {
    word.update(p);
  }
}
inOrderCount(word.root);
console.log("The word 'for' is used " + word.find("for").count + " times.");
