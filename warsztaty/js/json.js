var jsonOsoby = {
    "osoby": [
        {
            imie: 'Krystian',
            nazwisko: 'Dziopa',
            wzrost: 180,
            zainteresowania: [
                {
                    nazwa: 'podróże'
                },
                {
                    nazwa: 'gotowanie'
                }
            ]
        },

        {
            imie: 'Jakub',
            nazwisko: 'Radomski',
            wzrost: 140,
            zainteresowania: [
                {
                    nazwa: 'piłka'
                },
                {
                    nazwa: 'narty'
                }
            ]
        },
        {
            imie: 'Michał',
            nazwisko: 'Pol',
            wzrost: 190,
            zainteresowania: [
                {
                    nazwa: 'twitter'
                }]
        }
    ]
}

console.log(jsonOsoby);
jsonOsoby.osoby[0].zainteresowania.forEach(function (element, index) {
    console.log(element.nazwa);
});

jsonOsoby.osoby.forEach(function(element, index){
    console.log("To jest " + element.imie + " a jego wzrost to " + element.wzrost + "cm" );
})