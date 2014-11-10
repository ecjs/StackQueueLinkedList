exports.Queue = function() {
  this.dataStore = [];
  this.enqueue = enqueue;
  this.deque = deque;
  this.dequeue = dequeue;
  this.dequeuePatients = dequeuePatients;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.toStringPatient = toStringPatient;
  this.empty = empty;
};

function enqueue(element) {
  this.dataStore.push(element);
}

function deque() {
  return this.dataStore.pop();
}

function dequeue() {
  return this.dataStore.shift();
}

function dequeuePatients() {
  var entry = 0;
  for (var i = 0; i < this.dataStore.length; ++i) {
    if (this.dataStore[i].code > this.dataStore[entry].code) {
      entry = i;
    }
  }
  return this.dataStore.splice(entry, 1);
}

function front() {
  return this.dataStore[0];
}

function back() {
  return this.dataStore[this.dataStore.length - 1 ];
}

function toString() {
  var retStr = '';
  for (var i = 0; i < this.dataStore.length; ++i) {
    retStr += this.dataStore[i] + '\n';
  }
  return retStr;

}
function toStringPatient() {
  var retStr = '';
  for (var i = 0; i < this.dataStore.length; ++i) {
    retStr += this.dataStore[i].name + '\n';
  }
  return retStr;

}

function empty() {
  if (this.dataStore.length === 0) {
    return true;
 }

  else {
    return false;
  }

}

exports.Patient = function(name, code) {
  this.name = name;
  this.code = code;
};

palindrome = function(str) {
  var palindromeStatus = true;
  stringArr = new Queue();
  stringArr.dataStore = str.split('');
  while (stringArr.dataStore.length > 1) {
    if (stringArr.dequeue() === stringArr.deque()) {console.log('doing good');}
    else {
      palindromeStatus = false;
      return console.log('not a palindrome');
    }
  }
  if (palindromeStatus) {console.log('Palindrome!');}
};
