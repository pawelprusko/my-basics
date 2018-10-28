//zad.1
var first = document.querySelector('#menu');
function getDataInfo(element){
    var tab1 = [];
    var data = element.querySelectorAll('li');
    for (var el of data) {
    tab1.push(el.dataset.info);
    }
    return tab1
}
console.log(getDataInfo(first));
//zad.1
var second = document.querySelector('#main-contener');
function getElementClass(element){
    var tab2 = [];
    tab2.push(element.className);
    return tab2
}
console.log(getElementClass(second))
//zad.3
var third =  document.querySelector('.pink-color');
function getElementText(element){
    var wynik = element.innerHTML;
    return wynik
}
console.log(getElementText(third));
//zad.4
var fourth = document.querySelectorAll('.images');
function getElementAll(element){
    var tab3 = [];
    for (el of fourth) {
        tab3.push(el.alt)
    }
    return tab3
}
console.log(getElementAll(fourth))
//zad.5
var fifth = document.querySelectorAll('.my-link');
function getElementHref(element){
    var tab4 = [];
    for (el of fifth){
        tab4.push(el.href)
    }
    return tab4
}
console.log(getElementHref(fifth));

