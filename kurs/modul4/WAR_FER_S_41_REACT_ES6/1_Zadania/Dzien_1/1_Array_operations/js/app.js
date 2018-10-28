const productsInShop = [
    {
        name: 'Maka wieloziarnista',
        category: 'maka',
        price: 5
    }, 
    {
        name: 'Maka pszenna',
        category: 'maka',
        price: 3
    }, 
    {
        name: 'zytnia',
        category: 'maka',
        price: 10
    }, 
];

//1. Petla forEach (dziala jak petla for of)

// for (let element of productsInShop) {
//     console.log(element.name);
// }

productsInShop.forEach((element) => {
    console.log(element.name);
});

//2. Petla map

const productsNames = productsInShop.map((element) => {
    return element.name;
}) 

console.log(productsNames);

//3. Petla filter

const filteredProducts = productsInShop.filter((element) => {
    return element.price > 4
})

console.log(filteredProducts);


//4. Petla reduce

const sumOfProducts = productsInShop.reduce((sum, currElement) => {
    return sum = sum + currElement.price;
}, 0);

console.log(sumOfProducts);


// Function chaining

//Chce napisac funkcje, ktora policzy cene produktow, ktorych liczba znakow jest wieksza niz 8

const tab = productsInShop
    .map(element => {
        return {
            name: element.name,
            price: element.price
        }
    })
    .filter(el => el.name.length > 8)
    .reduce((sum, currentElement) => {
        return sum = sum + currentElement.price
    }, 0);

console.log(tab);

////////////////

//zad0
const cities = ["Kraków", "Olsztyn", "Szczecin", "Ostrów Wielkopolski"];
const newTab = cities.map( 
    el => el.length);
console.log(newTab);

//zad1
//randomize(param1, param2, callback);
const randomize = (a, b, fn) => {
    return fn(a, b)
}
const x = randomize(1, 5, function(a, b) {
    const random = Math.floor(Math.random()*(b-a+1)+a);
    return random;
})
console.log(x);

//zad2
const animals = ["cat", "shrimp", "giraffe"];
animals.forEach((element) => {
    console.log(element);
});

//zad3
var years = [1995, 1856, 2014, 1987];
const age = years.map(el => {
    return 2018 - el
})
console.log(age);

//zad4
const array = [2,2,2];
const suma = array.reduce((sum, el) => {
    return sum = sum + el 
},0)
console.log(suma);

const multiply = array.reduce((multi, el) => {
    return multi = multi * el 
},1)
console.log(multiply);


