document.addEventListener("DOMContentLoaded", function(){
var input = document.querySelector('#tagInput');
var images = document.querySelectorAll('img')
    for (el of images) {
        input.addEventListener("input", function () {

            for (var el of images) { //sprawdzaj każdemu obrazkowi datatag czy jest równy inputowi
                if (el.dataset.tag.includes(this.value)) { //jeśli tag data zawiera zawartosc inputa
                    el.style.display = "inline-block" //to pokaż ten obrazek
                } else {
                    el.style.display = "none"; //w przeciwnym razie schowaj
                }
            }

        })


    }
})