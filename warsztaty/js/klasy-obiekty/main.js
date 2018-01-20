class.ogloszenie{

    constructor( tytul, cena, opis, kontakt, kategoria ){
        this.tytul = tytul;
        this.cena = cena;
        this.opis = opis;
        this.kontakt = kontakt;
        this.kategoria = kategoria;
    }
    zmienKontakt( tel ){
        this.kontakt = tel; 
    }
    wyswietlTytul(){
        console.log( this.tytul )
    }
}

var ogloszenie1 = new ogloszenie( "Mieszkanie na sprzedaż", 300000, "2 pokoje z kuchnią, bez szaleńców na pokładzie", "503243244", "Nieruchomość");
var ogloszenie2 = new ogloszenie("Sprzedam Opla", 40000, "Trzyletni bezwypadkowy pierwszy właściciel", "22345223432", "Motoryzacja" );

console.log( ogloszenie1 );

ogloszenie1.zmienKontakt("ja@ja.pl");
console.log(ogloszenie1);