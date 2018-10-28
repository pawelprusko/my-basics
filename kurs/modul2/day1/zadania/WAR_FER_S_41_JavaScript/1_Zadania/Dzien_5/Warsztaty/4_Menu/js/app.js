document.addEventListener("DOMContentLoaded", function(){
var liZew = document.querySelectorAll('div>ul>li');


for (el of liZew) {
    el.addEventListener('mouseover', function(){
        var liWew = this.firstElementChild;
        if (liWew.style.display === "none") {
            liWew.style.display === "block";
        }

    })
    el.addEventListener('mouseout', function(){
        console.log('buuu');
    })

}




});

//jezeli ul w ogole istnieje, to pokazujemy,