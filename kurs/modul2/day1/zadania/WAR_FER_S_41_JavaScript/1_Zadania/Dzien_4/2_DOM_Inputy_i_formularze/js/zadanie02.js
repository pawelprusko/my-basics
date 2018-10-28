document.addEventListener("DOMContentLoaded", function(){
var apple = document.querySelector('[alt="Apple');
var ubuntu = document.querySelector('[alt="Ubuntu]');
var windows = document.querySelector('[alt="Ubuntu]');



    if (!apple.checked) {
        faktura.style.display = "none";
    }else{
        faktura.style.display = "block";
    }

});