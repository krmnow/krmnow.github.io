var pierwszyDiv = document.getElementById('parFirst');
console.log(pierwszyDiv);
//console.log(pierwszyDiv.parentNode);
//console.log(pierwszyDiv.parentElement);
console.log(pierwszyDiv.childNodes); // to zwraca wszystko
console.log(pierwszyDiv.children); // to zwraca tylko elementy html
console.log(pierwszyDiv.firstChild); // to zwraca element, choćby to był tylko enter
console.log(pierwszyDiv.firstElementChild); // to zwraca pierwszy element HTML
var pierwszyDivChild = pierwszyDiv.children[1];
console.log(pierwszyDivChild.nextElementSibling);
console.log(pierwszyDivChild.previousElementSibling);

var childNodesDiva = pierwszyDiv.childNodes;
childNodesDiva.forEach(function(element){
// console.log(element.nodeType); 
    
    if(element.nodeType == 1){
     console.log(element);   
    }
});