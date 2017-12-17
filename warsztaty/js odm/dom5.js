
var mainHeader = document.getElementById('maine-header');
mainHeader.innerHTML = 'Treść nagłówka';

var p = document.querySelector('header').children[0];
console.log(p.innerHTML);
console.log(p.innerText);
console.log(p.outerHTML);

var link = document.getElementsByClassName('link')[0];
link.href = 'http://google.pl';

link.className = "nowa-klasa";