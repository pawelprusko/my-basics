document.addEventListener("DOMContentLoaded", function () {
    var articleFirst = document.querySelector('article:first-child');
    var divFirst = articleFirst.querySelector('.content');
    var linkFirst = articleFirst.querySelector('a');
    var articleSecond = document.querySelector('article:nth-child(2)');
    var divSecond = articleSecond.querySelector('.content');
    var linkSecond = articleSecond.querySelector('a');
    linkFirst.addEventListener('click', function (e) {
        e.stopPropagation();
        if (divFirst.style.display === "none" || divFirst.style.display == "") {
            divFirst.style.display = "block";
        } else {
            divFirst.style.display = "none"
        }
    })
    document.addEventListener("click", function () {
        divFirst.style.display = "none"
    })
    divFirst.addEventListener('click', function (e) {
        e.stopPropagation();
    })
    linkSecond.addEventListener('mouseenter', function (e) {
            divSecond.style.display = "block";
        })
    linkSecond.addEventListener('mouseleave', function (e) {
        divSecond.style.display = "none";
    })
});