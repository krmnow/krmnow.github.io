class User{
    constructor(imie, nazwisko){
        this.imie = imie;
        this.nazwisko = nazwisko;
        
    }
    wyswietlInfo(){
        
        console.log("imie: " + this.imie + ", nazwisko: " + this.nazwisko);
    }
}



var krystian = new User('Adam', 'Dzwigała');
var tomek = new User('Tomasz', 'Chwaligobowski');


var osoba = {
    imie: "Mariusz",
    wzrost: 183,
    przedstawSie: function(){
      console.log("Mam na imie " + this.imie + " , mam " + this.wzrost + " cm.");
    }
    
}

tomek.wyswietlInfo();
krystian.wyswietlInfo();

/*
osoba.przedstawSie();
osoba.nazwisko = "Kowalski";
console.log(osoba);
*/
