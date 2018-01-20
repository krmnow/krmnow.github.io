var przyciski = document.querySelectorAll(".btn");

for(var i = 0; i<przyciski.length; i++){
    przyciski[i].addEventListener("click", function(){
        
        console.log(this.innerHTML);
    });
}