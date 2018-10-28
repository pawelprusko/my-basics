document.addEventListener("DOMContentLoaded", function () {
    var div = document.querySelector('div');
    var globalX = document.querySelector('#globalX');
    var globalY = document.querySelector('#globalY');
    var localX = document.querySelector('#localX');
    var localY = document.querySelector('#localY');

    div.addEventListener('mousemove', function (e) {
        globalX.innerHTML = e.pageX;
        globalY.innerHTML = e.pageY;
        localX.innerHTML = e.pageX-this.offsetLeft;
        localY.innerHTML = e.pageY-this.offsetTop;
    })


});