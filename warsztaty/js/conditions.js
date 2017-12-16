var wzrostMateusz = 190;
var wzrostOlgi = 190;

if (wzrostOlgi < wzrostMateusz) {
    console.log("Olga jest niższa");

}

/*warunek if else*/

if (wzrostOlgi < wzrostMateusz) {
    console.log("Olga jest niższa");

} else {
    console.log("Olga nie jest niższa");
}

/* warunek if else if */

if (wzrostOlgi < wzrostMateusz) {
    console.log("Olga jest niższa");

} else if (wzrostOlgi == wzrostMateusz) {
    console.log("Olga jest tego samego wzrostu co Mati");
} else {
    console.log("Olga jest wyższa");
}

/* warunek switch*/
var kolor = 'zielony';
switch (kolor) {
    case 'czerwony':
        console.log('Kolor czerwony');
        break;
    case 'zielony':
        console.log('Kolor zielony2');
        break;
    case 'niebieski':
        console.log('Kolor niebieski');
        break;
    case 'różowy':
        console.log('Kolor różowy');
        break;
    default:
        console.log('inny kolor');
}

/* Pętla for */



var liczby = [1, 421, 113, 7, 135, 546];


for (var i = 0; i < liczby.length; i++) {
    console.log(liczby[i]);
}

for (var i = 1; i < 10;) {

    console.log(i++);
}
var tablica = ["Krzysiek", "Daniel", "Łukasz", "Tymek"];

tablica.forEach(function (element, index) {
    console.log("Element z indexem " + index + " ma wartość " + element);

});
/*while i do while */
var it = 10;
var flaga = true;

while (flaga) {
    console.log(it);
    if (it < 5) {
        flaga = false;
    }
    it--;
}

do {
    console.log('Pętla do... while');
    it--;
} while (it > 0);

/*przerywanie pętli */

var a = 0;
while (a < 10) {
    console.log(++a);
    if (a == 5) {
        break;
    }
}