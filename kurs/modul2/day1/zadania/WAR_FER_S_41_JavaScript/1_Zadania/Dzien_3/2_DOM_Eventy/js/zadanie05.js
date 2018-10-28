document.addEventListener("DOMContentLoaded", function(){
var div = document.querySelectorAll('div');
    for (el of div) {
        el.addEventListener('click', function (e) {
            var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            e.target.style.backgroundColor = randomColor;
        })
    }

});