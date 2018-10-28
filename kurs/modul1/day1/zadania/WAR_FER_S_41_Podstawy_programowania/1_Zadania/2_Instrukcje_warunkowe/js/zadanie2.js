var random = Math.round(Math.random()*(10-1)+1);
var okno = prompt("Wpisz liczbę od 1 do 10");
var wynik = random == okno ? "Wygraleś" : "spróbuj znowu";
console.log(wynik);
