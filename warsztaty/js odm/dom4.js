var istniejacyWezel = document.getElementById("parFirst").children[3];
console.log(istniejacyWezel);
var newElement = document.createElement('p'); // stwórz nowy paragraf

var newElementContent = document.createTextNode('To jest nowy paragraf'); // stworzenie nowego tekstu do paragrafu

newElement.appendChild(newElementContent); // dodaje tekst do elementu
istniejacyWezel.appendChild(newElement);

istniejacyWezel.removeChild(newElement);