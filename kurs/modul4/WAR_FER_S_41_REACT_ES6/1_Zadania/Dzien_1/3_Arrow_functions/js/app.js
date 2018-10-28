//zeby zainstalować w nowym pliku klonujemy webpack.config i json, potem w terminalu npm install && npm start
//potem przeskakując do nowego zadania ubijamy webpacka ctr c i wpisujemy npm start w terminalu

//zad3
const minMax = (a,b) => {
    if (a>b) {
        return "liczba a jest większa"
} else if (a<b) {
    return "liczba b jest większa"} else {
        return "Obie liczby są równe"
    }
}
 console.log(minMax(5,3)); 
 
 //zad4
 const getSecondMaxNumber = (array) => {
    const arraySort = array.sort(function(a, b){return b - a});
    return arraySort[1]
 }
 const points = [40, 100, 1, 5, 25, 10];
 console.log(getSecondMaxNumber(points));

 //zad6
 let counter = 0;
 function coolInterval(number = 1) {
    const int = setInterval(() => {
        console.log("hello " + counter)
        counter++
        if (counter >= number) {
            clearInterval(int);
        }
    }, 2000);
}
coolInterval(4);
