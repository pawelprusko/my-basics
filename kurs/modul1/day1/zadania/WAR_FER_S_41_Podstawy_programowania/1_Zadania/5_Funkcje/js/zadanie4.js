function array(tablica) {
    var as = 0;

    for (var i =0; i<tablica.length; i++) {
        as+=tablica[i];
    }

    return as
}
console.log(array([1,2,3]));
