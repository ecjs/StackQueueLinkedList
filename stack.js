function Stack() {
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.clear = clear;
  this.length = length;
}

function push(element) {
  this.dataStore[this.top++] = element;
}
function peek() { return this.dataStore[this.top - 1];}
function pop() { return this.dataStore[--this.top];}
function clear() { this.top = 0;}
function length() { return this.top;}

var balanced = function(exp) {
  var p = new Stack();
  var expression = exp.split('');
  expression.forEach(checkP);

  function checkP(e) {
    if (e === '(') p.push(e);
    if (e === ')') p.pop();
  }
  console.log(p.length());
  if (p.length() === 0) {
    console.log('balanced');
  }
  else {
    console.log('not balanced');
  }
};

balanced('(())');
