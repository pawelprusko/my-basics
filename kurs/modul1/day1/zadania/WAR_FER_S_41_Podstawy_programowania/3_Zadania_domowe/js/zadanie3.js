function getEvenSum(n) {
    var suma=0;
    for (var i=1; i<n; i++) {
        if (i%2==0) {
            suma+=i;
        }
    }
    return suma
}
console.log(getEvenSum(7))