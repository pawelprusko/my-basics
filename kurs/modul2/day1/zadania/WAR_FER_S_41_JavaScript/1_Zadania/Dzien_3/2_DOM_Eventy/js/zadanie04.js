document.addEventListener("DOMContentLoaded", function () {
    var butt = document.querySelectorAll('button');
    for (el of butt) {
        el.addEventListener("click", function () {
            var span = document.querySelector('.counter')
            var nr = parseInt(span.innerHTML);
            span.innerHTML = ++nr;

        })
    }
});