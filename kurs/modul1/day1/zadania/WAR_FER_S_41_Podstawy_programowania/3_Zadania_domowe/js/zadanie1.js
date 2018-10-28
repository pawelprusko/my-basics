function getSecondMaxNumber(array) {
    array.sort(function(a,b){
        return b-a;
    });
    console.log(array[1]);
}
var arr1 = [1,2,3,4,5];
console.log(getSecondMaxNumber(arr1))


