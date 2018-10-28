document.addEventListener("DOMContentLoaded", function () {

    var lightbox = document.querySelector('.lightbox');
    var lightboxImg = document.querySelector('.lightbox-img');
    var lightboxClose = document.querySelector('.lightbox-close');
    var gallery = document.querySelectorAll('a');

    for (el of gallery) {
        el.addEventListener('click', function (e) {
            e.preventDefault();
            var href = this.getAttribute("href");
            lightboxImg.setAttribute("src", href);
            lightbox.style.display = "flex";

        })
    }
    lightboxClose.addEventListener("click",function () {
        lightbox.style.display = "none";
    })


});
