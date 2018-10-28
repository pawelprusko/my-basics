document.addEventListener("DOMContentLoaded", function(){
var buttons = document.querySelectorAll('.button');

for (var el of buttons) {


    el.addEventListener('click', function(){
        var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        this.parentElement.style.backgroundColor = randomColor;

    })
}
});