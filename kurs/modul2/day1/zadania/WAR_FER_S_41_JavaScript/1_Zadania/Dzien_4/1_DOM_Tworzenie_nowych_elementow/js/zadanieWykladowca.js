document.addEventListener("DOMContentLoaded", function(){
var buttons = document.querySelectorAll('.deleteBtn');
for (var el of buttons){
    el.addEventListener('click', function(){
        var tr = this.parentElement.parentElement;
        tr.parentElement.removeChild(tr);
    })
}
});