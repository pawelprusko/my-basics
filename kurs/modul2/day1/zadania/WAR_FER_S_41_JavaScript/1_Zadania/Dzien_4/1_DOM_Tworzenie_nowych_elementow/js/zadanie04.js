document.addEventListener("DOMContentLoaded", function(){
var button = document.querySelector('.button');

button.addEventListener('click', function(){
    var list = document.querySelector('.list');
    var li = list.querySelectorAll('li');
    for (el of li) {
        el.parentElement.removeChild(el);

    }

})

});