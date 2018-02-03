/*
Napisz funkcję ze zmiennymi lokalnymi, która liczy sumę kwadratów elementów tablicy [0,1,2,3,4,5]. Funkcja przyjmuje jeden parametr - tablicę z liczbami. Funkcja zwraca sumę. Wyświetl wynik w konsoli.
*/

'use strict';

function sum_sq(array) {

    var sum = 0,
    i = array.length;

    while (i--) {
        sum += Math.pow(array[i], 2);
    }

}

console.log(sum_sq([0, 1, 2, 3, 4]));