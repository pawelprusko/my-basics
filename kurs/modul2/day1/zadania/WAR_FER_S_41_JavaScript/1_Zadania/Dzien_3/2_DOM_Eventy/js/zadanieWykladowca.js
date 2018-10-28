document.addEventListener("DOMContentLoaded", function(){ /// WAZNE PAMIETAC O TYM!!!




var parents = document.querySelectorAll('.parent');
for (var el of parents) {
    el.addEventListener("mouseover", function(){
        this.querySelector('.children').style.display = "block"

    });

    el.addEventListener("mouseout", function(){
        this.querySelector('.children').style.display = "none"

    });

}
});