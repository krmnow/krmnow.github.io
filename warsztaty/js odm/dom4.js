var istniejacyWezel = document.getElementById("parFirst").children[3];
console.log(istniejacyWezel);
var newElement = document.createElement('p'); // stwórz nowy paragraf

var newElementContent = document.createTextNode('To jest nowy paragraf'); // stworzenie nowego tekstu do paragrafu

newElement.appendChild(newElementContent); // dodaje tekst do elementu
istniejacyWezel.appendChild(newElement);

istniejacyWezel.removeChild(newElement);

var parFirstDiv = document.getElementById('parFirst');

parFirstDiv.replaceChild(newElement, istniejacyWezel);


var wszystkieLinki = document.getElementsByTagName('a');

for (var i = 0; i < wszystkieLinki.length; i++) {
    var br = document.createElement('br');
    wszystkieLinki[i].removeAttribute('class');
    wszystkieLinki[i].parentElement.insertBefore(br, wszystkieLinki[i].nextSibling);
}