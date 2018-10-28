//const weather = ["snow", "rain", "sun"];
//const [snow, ,sun] = weather;
//console.log(sun);
//
//
//
//const slider = {
//    const slider = {
//        type: "infinite",
//        numberOfItems: 10,
//        center: true,
//        autoStart: true
//    }
//}
//const {type, autostart} = slider
//console.log(type);

const names = ["Jan", "Kacper", "Piotr"];
const [name1, name2, name3] = names;
console.log(name1);

function  generateRandomNumbers() {
    let array =[];
    for (let i =0; i<6; i++) {
        array.push(Math.floor(Math.random()*6));
    }
    return array
}
console.log(generateRandomNumbers());
let array2 = generateRandomNumbers()


let [el1, ,el3, , , ] = array2;
console.log(el1, el3);

function getAnimal() {
    let obj = {
        name: "Mruczek",
        age: 10,
        getVoice: () => "miau miau"
    }
    return obj
}
let animals = getAnimal();
let {name, getVoice} = animals;
console.log(name, getVoice());




