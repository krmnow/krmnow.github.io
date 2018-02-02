$(function () {
    $('#download').click(function () {
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function (data) {
            
            $('body').append('<div id="dane-programisty">
                '<br><div>Imię: ' + data.imie +
                '<br> Nazwisko: ' + data.nazwisko +
                '<br> Zawód: ' + data.zawod +
                '<br> Firma: ' + data.firma
                             </div>
            );

        });
    });
});
