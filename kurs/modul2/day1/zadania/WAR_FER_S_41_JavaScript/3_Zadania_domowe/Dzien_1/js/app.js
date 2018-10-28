//ZAD. 1
console.log("Zadanie 1");
function getNumber(number, array){
    var wynik;
    if (array.indexOf(number) !== -1) {
        wynik = console.log("true");
    }
    else {
        wynik = console.log("false");
    }
    return wynik
}
console.log(getNumber(9,[2,5,6,4]));

//ZAD.2
console.log("Zadanie 2");
function createIdentityMartix(rows, columns){
var tab1 = [];
for (var i=1; i<=rows; i++) {
    var tab2 = [];
    for (var j=1; j<=columns; j++) {
        if (i==j) {
            tab2.push(1);
        }else{
            tab2.push(0);
        }
    }
    tab1.push(tab2)
}
return tab1
}
console.log(createIdentityMartix(4,4));

//ZAD.3
console.log("Zadanie 3");
