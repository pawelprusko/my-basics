/*function getFibonacciNumbers(n) {
var arr = [];
    var pushes;
    for(var i=0; i<=n; i++) {
        var pushes = (i-2)+(i-1);
        arr.push(pushes);
        return arr
    }
}
console.log(getFibonacciNumbers(9))
*/
function getFibonacciNumbers(n){
    var tablica = [0, 1];
    for (var i = 2; i < n; i++){
        tablica.push(tablica[i - 2] + tablica[i -1])
    }
    return tablica
}
console.log(getFibonacciNumbers(9))