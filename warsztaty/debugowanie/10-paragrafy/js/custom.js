/*

Stworz Kalkuator w HTML, CSS i jQuery 

*/

'use strict';

$(document).ready(function(){
    
    var kontener = $('#container');
    
    $('#btnLastToFirst').click(function(){
        kontener.append( kontener.children().first() );
    });
    
    $('#btnFirstToLast').click(function(){
        kontener.prepend( kontener.children().last() );
    });
    
});