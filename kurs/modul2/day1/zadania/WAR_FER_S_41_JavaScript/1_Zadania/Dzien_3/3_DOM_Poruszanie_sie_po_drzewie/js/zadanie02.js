document.addEventListener("DOMContentLoaded", function () {
    var div = document.querySelectorAll('.listContainer');
    for (el of div) {

        el.addEventListener('mouseover', function () {
            var ul = this.firstElementChild;
            for (li of ul.children) {
                li.style.backgroundColor = "green";
            }
            ul.firstElementChild.style.backgroundColor = "red";
            ul.lastElementChild.style.backgroundColor = "blue";


        })
    }

});