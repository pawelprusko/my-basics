document.addEventListener('DOMContentLoaded', function() {

    var form = document.querySelector("form");

    var inputEmail = form.querySelector("#email");
    var inputName = form.querySelector("#name");
    var inputSurname = form.querySelector("#surname");
    var inputPass1 = form.querySelector("#pass1");
    var inputPass2 = form.querySelector("#pass2");
    var inputAgree = form.querySelector("#agree");
    var message = document.querySelector(".error-message");

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        var error = [];

        if (!inputEmail.value.includes('@')) {
            error.push("Email musi posiadać znak @");
        }

        if (inputName.value.length < 3) {
            error.push("Twoje imię jest za krótkie");
        }

        if (inputSurname.value.length < 3) {
            error.push("Twoje nazwisko jest za krótkie");
        }

        if (inputPass1.value !== inputPass2.value || inputPass1.value === "") {
            error.push("Hasła nie są takie same lub są puste");
        }

        if (!inputAgree.checked) {
            error.push("Musisz zaakceptować warunki");
        }

        if (error.length) {
            //tutaj sa bledy
            message.innerHTML = error.join("<br>");
        } else {
            //nie ma bledow
            form.submit();
        }
        console.log(error);
    })

});