'use strict'

var names = ['Monika', 'Jan', 'Adam'];
console.log(names[0]);


names[3] = 'Ola';
names[2] = 'Kuba';

names.push('Miłosz');
var ostatniElement = names.pop();
names.unshift('Robert');
console.log(names.sort());
console.log(names);

var liczby = [1, 2, 0, 10, 1342, 323432];
console.log(liczby.sort());