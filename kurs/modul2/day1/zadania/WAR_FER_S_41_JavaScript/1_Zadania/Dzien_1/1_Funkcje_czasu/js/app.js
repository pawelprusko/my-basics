function setHello(n) {
    var counter = 0;
    var int = setInterval(function () {
        counter++;
        console.log("Hello", counter);
        if (counter > n) {
            clearInterval(int)
        }

    }, 100);


}

setHello(7)
/* console.log(setHello(5))
var first = setInterval(setHello(number){
    for (var i=-1; i<number; i++){
    }

    console.log("Hello");},1000
)
console.log(first(setHello(10))
*/