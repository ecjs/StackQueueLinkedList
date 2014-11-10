var LList = require('./linkedlist.js');
var cities = new LList();
cities.insert('Seattle', 'head');
cities.insert('Miami', 'Seattle');
cities.insert('Bellingham', 'Miami');
cities.insert('New York', 'Bellingham');
cities.display();
console.log('^^ Prior to changing');
cities.back('New York', 2);
cities.show('Miami');

var grades = new LList();

grades.insertGrade('Mark', 'A');
grades.insertGrade('Jenni', 'B');
grades.insertGrade('Bob', 'C');
grades.insertGrade('Jeff', 'B');
grades.insertGrade('Don', 'A');

console.log(grades.first.name + ' Grade: ' + grades.first.grade);
console.log(grades.first.next.name + ' Grade: ' + grades.first.next.grade);
console.log(grades.first.next.next.name + ' Grade: ' + grades.first.next.next.grade);
console.log(grades.first.next.prev.name + ' Grade: ' + grades.first.next.next.next.grade);
