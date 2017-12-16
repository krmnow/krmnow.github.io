'use strict'

var iloscOsoba1 = 3500;
var iloscOsoba2 = 5000;
var iloscOsoba3 = 7000;
var iloscOsoba4 = 2500;

var sumaKasy = iloscOsoba1 + iloscOsoba2 + iloscOsoba3;

console.log('w głównym programie suma kasy wynosi ' + sumaKasy)

function policzSumeKasy(iloscOsoba1, iloscOsoba2, iloscOsoba3){
    // sumaKasy = 500;
    var suma = iloscOsoba1 + iloscOsoba2 + iloscOsoba3;
    
    var sumaKasy = iloscOsoba1 + iloscOsoba2;
    
    console.log('w fukcji suma kasy wynosi ' + sumaKasy);
        console.log('w fukcji suma wynosi ' + suma);
    return suma;

}

policzSumeKasy(20,30,40)

  console.log('w programie po funkcji suma kasy wynosi ' + sumaKasy);
