/*

7 - Napisz klasę "Ksiazka", która ma właściwości "tytul", "autor", "przeczytana" (typ Boolean) oraz jedną metodę "opiszKsiazke", która zwraca stringa opisującego tą książkę wg. wzoru "Książka ma tytuł Wiedźmin, autorem jest Andrzej Sapkowski i została przeczytana.".

8 -  Stwórz 3 instancje obiektu tej klasy z czego jedna z książek ma być już przeczytana, a następnie stwórz nową tablicę globalną i dodaj do niej te 3 książki.

9 - Następnie napisz funkcję "iloscPrzeczytanych", która jako parametr przyjmuje tablicę obiektów (naszych książek), a zwraca nam ilość przeczytanych książek. Podczas interacji po tablicy (wewnątrz tej funkcji) i sprawdzania, czy książka jest przeczytana, wywołuj metodę opiszKsiazke() i wynik wyświetlaj w konsoli.

Na samym końcu wyświetl w konsoli ilość przeczytanych książek 

*/

'use strict';

var przeczytana = "przeczytana";

function Ksiazka (tytul, autor, przeczytana) {
	this.tytul = tytul;
	this.autor = autor;
	this.przeczytana = przeczytana;
	this.opiszKsiazke = function() {
		if(this.przeczytana == true) {
		return "Książka ma tytuł " + this.tytul +", autorem jest " + this.autor + " i została przeczytana";
		} else if (przeczytana == false) {
			return "Książka ma tytuł " + this.tytul +", autorem jest " + this.autor;
		}
	} 	
} 

var pinocchio = new Ksiazka("Pinocchio", "Carlo Collodi", true);
var strachyPentelikonu = new Ksiazka("Strachy Pentelikonu", "Aleksander Świętochowski", false);
var uKrolaOlch = new Ksiazka("U króla Olch", "Hans Christian Andersen", false);

var zbioryKsiazek= [], zbiorKsiazek = [];
zbioryKsiazek[0] = pinocchio; 
zbioryKsiazek[1] = strachyPentelikonu;  
zbioryKsiazek[2] = uKrolaOlch;

function iloscPrzeczytanych (zbioryKsiazek) {
	var wynik = 0;
	for (var i = 0; i<zbioryKsiazek.length; i++) {
		console.log(zbioryKsiazek[i].opiszKsiazke());
		if(zbioryKsiazek[i].przeczytana) {
			wynik+=1;
		}
	}
	return wynik;
}

var taIloscPrzeczytanych = iloscPrzeczytanych (zbioryKsiazek);
console.log("Przeczytane: " + taIloscPrzeczytanych);
