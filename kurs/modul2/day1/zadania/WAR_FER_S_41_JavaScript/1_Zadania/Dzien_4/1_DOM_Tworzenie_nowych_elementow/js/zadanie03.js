document.addEventListener("DOMContentLoaded", function(){
var button = document.querySelector('.button');
button.addEventListener('click', function(){
    this.parentElement.removeChild(this)
})


});