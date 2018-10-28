/*
  Poniżej napisz kod rozwiązujący zadania
 */
document.addEventListener("DOMContentLoaded", function(){

var ex5 = document.querySelector(".ex5");
var liEven = ex5.querySelectorAll('li:nth-of-type(even)');
for (var el of liEven) {
    el.style.backgroundColor = "green";
}
var li5 = ex5.querySelector('li:nth-child(5)');
li5.classList.add('big');

var links = ex5.querySelectorAll('a');
for (a of links) {
    a.style.textDecoration = "none";
}
 var third = ex5.querySelectorAll('li:nth-child(3n)');
      for (var li of third) {
    li.style.textDecoration = "underline";
      }
});

var chromeCnt = document.querySelector('.chrome-cnt');
var chromeImg = chromeCnt.querySelector('.chrome');
var  chromeLInk = chromeCnt.querySelector('a');
chromeImg.style.width = "100px";
chromeLInk.innerHTML = "Chrome";

var edgeCnt = document.querySelector('.edge-cnt');
var edgeImg = edgeCnt.querySelector('.edge');
var  edgeLInk = edgeCnt.querySelector('a');
edgeImg.style.backgroundImage = "url(assets/img/edge.png)"
chromeLInk.innerHTML = "Chrome";

var firefoxCnt = document.querySelector('.firefox-cnt');
var fireImg = firefoxCnt.querySelector('.firefox');
var  fireLInk = firefoxCnt.querySelector('a');
fireImg.style.backgroundImage = "url(assets/img/firefox.png)"
fireLInk.innerHTML = "Firefox";

var ex2 = document.querySelector('.ex2');
var id = ex2.querySelector('#name');
var color = ex2.querySelector('#fav_color');
var meal = ex2.querySelector('#fav_meal');
id.innerHTML = "Pawel";
color.innerHTML = "niebieski";
meal.innerHTML = "frytki";

var ex3 = document.querySelector('.ex3');
var ul = ex3.querySelector('ul');
ul.classList.add('menu');

var li = ul.querySelectorAll('li');
for (el of li){
    el.classList.add('menuElement');
}
var error = document.querySelectorAll('.error');
for (el of error) {
    el.classList.remove('error');
}
var data = document.querySelector('.ex4');
var li1 = data.querySelectorAll('ul li');
var counter = 1;
for (el of li1) {
    el.dataset.id = counter++;
}



