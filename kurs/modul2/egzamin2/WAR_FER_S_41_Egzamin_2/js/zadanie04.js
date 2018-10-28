//zad.1
var first = document.querySelectorAll('.sample_class');
function getTag(elements) {
    var tab1 = [];
    for (el of elements) {
        tab1.push(el.tagName);
    }
    return tab1
}

console.log(getTag(first));

//zad.2
var second = document.querySelector('#sample_id');
function getClass(element) {
    var tab2 = [];
    tab2.push(element.className);
    return tab2
}

console.log(getClass(second))

//zad.3
var div = document.querySelector('.sample_class_2');
var ul = div.querySelector('ul');
var li = ul.querySelectorAll('li');

function getInnerText(elements) {
    var tab3 = [];
    for (el of elements) {
        tab3.push(el.innerHTML);
    }
    return tab3
}

console.log(getInnerText(li));

//zad.4
var link = document.querySelectorAll('a');
function getAddress(elements) {
    var tab4 = [];
    for (el of elements) {
        tab4.push(el.getAttribute("href"));
    }
    return tab4
}
console.log(getAddress(link));

//zad.5
var last = document.querySelector('.sample_class_3');
var kids = last.children;
function childrenList(element) {
    var tab5 = [];
    for (el of element) {
        tab5.push(el.tagName);
    }
    return tab5
}
console.log(childrenList(kids));



