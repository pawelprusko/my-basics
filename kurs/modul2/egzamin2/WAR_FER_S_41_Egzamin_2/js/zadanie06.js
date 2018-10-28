document.addEventListener("DOMContentLoaded", function () {
    var button1 = document.querySelector('#button-1');
    var button2 = document.querySelector('#button-2');
    var button3 = document.querySelector('#button-3');
    var list = document.querySelector('#shopping-list');

    button1.addEventListener('click', function () {
        var liNew = document.createElement('li');
        liNew.innerHTML = "Chleb";
        list.appendChild(liNew);
    })
    button2.addEventListener('click', function () {
        var last = list.lastElementChild;
        last.parentElement.removeChild(last);
    })
    button3.addEventListener('click', function () {
        var second = list.children[1];
        var clone = second.cloneNode(true);
        list.appendChild(clone);
    })

});