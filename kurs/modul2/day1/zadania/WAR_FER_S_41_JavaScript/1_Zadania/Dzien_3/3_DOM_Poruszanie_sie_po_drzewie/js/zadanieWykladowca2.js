document.addEventListener('DOMContentLoaded', function() {

    var btns = document.querySelectorAll('.button');

    for (var el of btns) {

        el.addEventListener("click", function() {
            var cnt = this.nextElementSibling;

            // if (cnt.style.display === "block" || cnt.style.display === "") {
            //     cnt.style.display = "none";
            // } else {
            //     cnt.style.display = "block";
            // }

            cnt.classList.toggle('hidden');

        });
    }

});