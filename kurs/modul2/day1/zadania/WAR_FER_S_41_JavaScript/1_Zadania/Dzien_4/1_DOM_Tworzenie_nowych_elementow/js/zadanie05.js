document.addEventListener("DOMContentLoaded", function(){
var ul1 = document.querySelector('#list1');
var ul2 = document.querySelector('#list2');

var btn = document.querySelectorAll('.moveBtn');
for (el of btn) {
    el.addEventListener('click', function(){
        if (this.parentElement.parentElement.id === "list1") {
            ul2.appendChild(this.parentElement)
    }else{
        ul1.appendChild(this.parentElement)
        }
    })
}
});