document.addEventListener("DOMContentLoaded", function () {
    var button = document.querySelector('.button');
    var counter = 0;

    button.addEventListener('click', function () {
        var li = document.createElement('li');

        li.innerHTML = (++counter) + "To jest element";
        var ul = document.querySelector('.menu');
        ul.appendChild(li);
    })


});