function getNegativeNumbers(array) {
    var arr =[];
    for (var i=0; i<array.length; i++) {
        if (array[i]<0) {
            arr.push(array[i])
        }
    }
    return arr
}
var arr1 = [-3, 4, 5, -6, -18];
console.log(getNegativeNumbers(arr1))