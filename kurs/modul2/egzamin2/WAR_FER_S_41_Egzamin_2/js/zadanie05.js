document.addEventListener("DOMContentLoaded", function () {
    var button = document.querySelectorAll('button');


    for (el of button) {
        el.addEventListener('click', function () {
            var data = this.dataset.text;
            var div = document.querySelector('#container');
            div.innerHTML = data

        })
    }

});