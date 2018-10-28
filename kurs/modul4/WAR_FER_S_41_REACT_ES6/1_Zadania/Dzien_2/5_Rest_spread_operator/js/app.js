document.addEventListener('DOMContentLoaded', function() {
//zad0
    let nameA = ["Zosia", "Michał", "Kasia"];
let nameB = ["Kuba", "Jan", ...nameA, "Ola"];
console.log(...nameB);
    
let getAverage = function(...args) {
return args.reduce((prev, next) => prev + next)/args.length
}
console.log(getAverage(1,4,5));
});
//zad1
let name = "Pawel";
let array =[...name];
console.log(array);
//zad2
const fruits = ["banan", "kiwi"];
const vegetables = ["ogorek", "cebula"];
const mix = [...fruits, ...vegetables];
console.log(mix);


