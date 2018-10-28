function bigestSumOfTwoElements(array) {
    var sort = array.sort(function(a,b){
        return b>a
    });
    if (array.length == 0) {
        return false
    }else{
        if (array.length == 1) {
            return array[0]
        } else{
            var wynik = array[0] + array[1];
            return wynik
        }
    }
}
console.log(bigestSumOfTwoElements([3]));


