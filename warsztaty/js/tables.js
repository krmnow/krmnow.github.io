'use strict'

var names = ['Monika', 'Jan', 'Adam'];
console.log(names[0]);


names[3] = 'Ola';
names[2] = 'Kuba';

names.push('Miłosz');
var ostatniElement = names.pop();
names.unshift('Robert');
console.log(names);
console.log(ostatniElement);
