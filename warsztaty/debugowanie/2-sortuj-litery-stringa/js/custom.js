/*
Napisz funkcję, która pobiera jako parametr stringa (czyli napis) i zwraca ten napis z posortowanymi literami.

Następnie wywołaj funkcję i posortuj stringa "Akademia108" oraz wyświetl wynik w konsoli.

Podpowiedź:

Zamień stringa na tablicę, dopiero wtedy wykonaj odpowiednie operacje i powróć do stringa.

*/

'use strict';

function alphabet_order(napis) {
    var zwrot = napis.split('').sort().join('');
    return zwrot;
}

console.log(alphabet_order("Akademia108"));
