'use strict';

var name;
var imiedamskie = 'Kaja';
var wiek = 37;

name = imiedamskie;

console.log(name);
console.log(wiek);

function myFunction() {
    var nazwisko = 'Kowalski';
    console.log(nazwisko);
}

myFunction();

var nazwaFunkcji = function () {
    console.log('funkcja anonimowa');
}
nazwaFunkcji();

function mnozenie(parametr1, parametr2, parametr3) {
    var wynik = parametr1 * parametr2 * parametr3;
    return wynik;
}
console.log(mnozenie(3, 4, 6));

var liczba1 = 5;
var liczba2 = 13;
var liczba3 = 8;

console.log(mnozenie(liczba1, liczba2, liczba3));