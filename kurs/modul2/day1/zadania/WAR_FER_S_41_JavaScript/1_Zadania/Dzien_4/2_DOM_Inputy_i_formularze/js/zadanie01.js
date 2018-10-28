document.addEventListener("DOMContentLoaded", function(){
var faktura = document.querySelector('#invoiceData');
var ptak = document.querySelector('#invoice');
if (!ptak.checked) {
    faktura.style.display = "none";
}else{
    faktura.style.display = "block";
}
ptak.addEventListener('click', function () {
    if (!this.checked) {
        faktura.style.display = "none";
    }else{
        faktura.style.display = "block";
    }


})


});