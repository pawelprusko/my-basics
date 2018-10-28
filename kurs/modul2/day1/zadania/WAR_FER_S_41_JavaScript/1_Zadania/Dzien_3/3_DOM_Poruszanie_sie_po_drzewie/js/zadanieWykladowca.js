document.addEventListener("DOMContentLoaded", function(){
    var first = document.querySelector('.first');
    console.log(first.FirstElementChild.children[2]);

    var second = document.querySelector('#second');
    var secondParent = second.parentElement;
    console.log(secondParent.children[3])

    var dataEx = document.querySelector("[data-ex='third']");
    var dataEXGrandpa = dataEx.parentElement.parentElement;
    var dataLast = dataEXGrandpa.lastElementChild;
    var dataFirst = dataLast.children[0];
    console.log(dataCHildren[Math.floor(dataCHildren.length/2)]);


});

