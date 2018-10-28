document.addEventListener("DOMContentLoaded", function(){
    var btns = document.querySelectorAll("button");

    for (var el of btns){
        el.addEventListener("click", function (){
            var children = this.nextElementSibling;
            var span = children.querySelector(".counter");
            var nr = parseInt(span.innerHTML);
            span.innerHTML = ++nr;

        })
    }

});