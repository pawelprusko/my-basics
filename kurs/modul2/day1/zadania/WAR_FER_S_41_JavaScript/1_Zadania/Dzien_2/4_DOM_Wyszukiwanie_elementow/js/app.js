
var h1 = document.querySelector('h1');
console.log(h1);
var title = document.querySelector('.title');
console.log(title);
var animation = document.querySelector('[data-animation]');
console.log(animation);


var div = document.querySelectorAll('div');
console.log(div.length);

var offer = document.querySelectorAll('.oferts');
console.log(offer.length);

var href = document.querySelectorAll('[href]');
console.log(href.length);


var id1 = document.querySelector('#home');
console.log(id1);

var id2 = document.getElementById('home');
console.log(id2);

var li1 = document.querySelector('li[data-direction]'); //uwaga na spację!
console.log(li1);

var clas = document.querySelector('.block');
console.log(clas);

var li2 = document.querySelectorAll('nav li'); //uwaga na spację!
console.log(li2);

var paragrafy = document.querySelectorAll('div p'); //uwaga na spację!
console.log(paragrafy);

var divy = document.querySelectorAll('article div'); //uwaga na spację!
console.log(divy);

var tagg = document.querySelector('article.first');
var tak = tagg.querySelectorAll('h2');
console.log(tak.length);

var tigg = document.querySelectorAll('article.first h2');
console.log(tigg.length);