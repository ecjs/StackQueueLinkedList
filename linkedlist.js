function Node(element) {
  this.element = element;
  this.next = null;
  this.previous = null;
}

function Grade(name, grade) {
  this.name = name;
  this.grade = grade;
  this.next = null;
  this.prev = null;
}
function LList() {
  this.head = new Node('head');
  this.find = find;
  this.insert = insert;
  this.display = display;
  this.findPrevious = findPrevious;
  this.remove = remove;
  this.advance = advance;
  this.back = back;
  this.insertGrade = insertGrade;
  this.show = show;
  this.firstGrade = undefined;
}
/* jshint ignore:start */
function remove(item) {
  var prevNode = this.findPrevious(item); if (!(prevNode.next === null)) {
    prevNode.next = prevNode.next.next;
  }
}

function findPrevious(item) {
  var currNode = this.head;
  while (!(currNode.next === null) &&
           (currNode.next.element != item)) {
    currNode = currNode.next;
  }
  return currNode;
}
function display() {
  var currNode = this.head;
  while (!(currNode.next === null)) {
    console.log(currNode.next.element);
    currNode = currNode.next;
  }
}
/* jshint ignore:end */
function find(item) {
  var currNode = this.head;
  while (currNode.element != item) {
    currNode = currNode.next;
  }
  return currNode;
}
function insert(newElement, item) {
  var newNode = new Node(newElement);
  var current = this.find(item);
  newNode.next = current.next;
  newNode.previous = current;
  current.next = newNode;
}

function advance(node, places) {
  var currNode = this.find(node);
  var temp = currNode;
  this.remove(node);

  for (var i = 0; i < places; i++) {
    currNode = currNode.next;
  }

  temp.next = currNode.next;
  currNode.next = temp;
}

function back(node, places) {
  var cursor = this.find(node);
  var current = this.find(node);

  for (var i = 0; i < places + 1; i++) {
    current = current.previous;
  }

  cursor.previous.next = cursor.next;
  current.previous.next = cursor;
  cursor.next = current;

  this.display();
}

function insertGrade(name, grade) {
  var graded = new Grade(name, grade);
  if (this.first === undefined) {
    this.first = graded;
  } else {
    var current = this.first;
    while (current.next) {
      current = current.next;
    }

    current.next = graded;
    graded.prev = current;
  }
}

function show(node) {
  var currNode = this.find(node);
  console.log('current node is: ' + currNode.element);
  console.log('Next node is: ' + currNode.next.element);
  console.log('Previous node is: ' + currNode.previous.element);
}

module.exports = LList;
