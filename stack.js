/*jshint evil: true */
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

  function checkP(e, index) {
    if (e === '(') p.push(index);
    if (e === ')') p.pop();
  }
  console.log(p.length());
  if (p.length() === 0) {
    console.log('balanced');
  }
  else {
    console.log('not balanced, ( at index ' + p.top + 'missing counterpart.');
  }
};

// for postfix expect "3 3 +"
var postfix = function(expression) {
  var newExp = '';
  var operators = new Stack();
  var operands = new Stack();
  for (var i = 0; i < expression.length; i++) {
    if ((expression[i] === '*') || (expression[i] === '/') || (expression[i] === '+') || (expression[i] === '-')) {
      operators.push(expression[i]);
      newExp += operands.pop() + expression[i] + operands.pop();
    }
    else if (expression[i] != ' ') {
      operands.push(expression[i]);
    }
  }
  console.log(eval(newExp));
};

function pezYellow() {
  var pez1 = new Stack();
  var pez2 = new Stack();

  pez1.push('red');
  pez1.push('yellow');
  pez1.push('white');
  pez1.push('red');
  pez1.push('yellow');
  pez1.push('white');

  var temp = '';
  while (pez1.peek() !== undefined) {
    temp = pez1.pop();
    if (temp === 'yellow') { temp = undefined; }
    else { pez2.push(temp); }
    }

    while (pez2.peek() !== undefined) {
      pez1.push(pez2.pop());
    }
    temp = undefined;
    console.log(pez2.dataStore);
  }
