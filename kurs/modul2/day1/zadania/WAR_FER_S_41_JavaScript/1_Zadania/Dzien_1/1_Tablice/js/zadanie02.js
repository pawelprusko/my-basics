
function createArray(number) {
    var newArray = [10];

    for(var counter = 1; counter <= number; counter++) {
        newArray.push(counter);
    }

    return newArray;
}

console.log("tablica z liczbami do 6 = " + createArray(6));
console.log("tablica z liczbami do 1 = " + createArray(1));
console.log("Test dla liczby ujemnej (powinna być pusta tablica) " + createArray(-6));
console.log("Test dla zera (powinna być pusta tablica) " + createArray(0));

function printTable(array){
    for (var i of array) {
        var end = console.log(i)
    }
return end
}
printTable([1,2,3]);

function multiply(array){
    var multi = 1;
    for (var n of array) {
        multi *= n;

    }
    return multi
}
console.log(multiply([2,4,8]));

function getEvenverage(tablica){
    var ar = [];
    sum = 0;
    for (var a of tablica) {
        if (a%2 === 0) {
            ar.push(a);
            sum += a;

        }
        return sum
    }

}
console.log(getEvenverage([2,5,3,4,8]));

console.log("Heej");

function addArrays(arr1, arr2){
    var sum = [];
    if (arr1.length > arr2.length) {

    } else if (arr1.length < arr2.length {

    } else {
        for (var a of )
    }
}