/*
Stwórz funkcję, która jako parametr pobiera tablicę liczb. Liczy sumę i iloczyn jej elementów i zwraca oba wyniki w tablicy. 
Następnie wyświetl oba wyniki w konsoli, formatując je w sposób "Suma elementów: X, Iloczyn elementów: Y"
*/

'use strict';

function sumaIloczyn(tablica) {
  
  var suma = 0;
  var iloczyn = 1;
  
  tablica.forEach(function(element) {
    suma += element;
    iloczyn *= element; 
      var tablica = [suma, iloczyn];
  });
  
  return tablica;
}

var tablica1 = [1,2,3,4,5,6,8,9,10,11,16];

console.log( sumaIloczyn(tablica1) );