Array.prototype.printTable = function() {
    for (el of this) {
        console.log(el);
    }
}

var array1 = [3,4,5,6];

array1.printTable();
console.log(array1)

