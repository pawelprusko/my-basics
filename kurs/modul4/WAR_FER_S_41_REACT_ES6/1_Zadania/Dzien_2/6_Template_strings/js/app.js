document.addEventListener('DOMContentLoaded', function() {
function whoAreYou(person) {
    let szablon = `My name is ${person.name} ${person.lastName}.
    I am ${2018-person.yearOfBirth} years old.
    My proffesion is ${person.proffesion}`
    console.log(szablon);
}


    const person = {
    name: "Vlad",
    lastName: "Drăculea",
    yearOfBirth: 1431,
    proffesion: "Lord of Wallachia"
  };
  
  whoAreYou(person);

});

//zad1
let firstNumber = 4;
let secondNumber = 5;
 console.log(`Suma liczb ${firstNumber} i ${secondNumber}: ${firstNumber+secondNumber}`);

 function Norris() {
     let chuck = `"Myślę, że jest wiele piękna
     w posiadaniu problemów.
     To jeden ze sposobów w jaki się uczymy"
     Herbie Hancock`;
    console.log(chuck);
                   return chuck
 };
 Norris();
 let quote = Norris();
 let put = document.querySelector(".cite");
put.innerHTML = quote;

function ArrayFunction(array) {
    var result = console.log(`${[...array]}`);
    return result
}
ArrayFunction([1,2,3])

var text = `To jest button.
Jego szerokość to 140px.
Napis, który na nim widnieje to "Send message`;
console.log(text);

const button = {
    value: "Send message",
    idName: "sendMsg",
    width: "100px",
    padding: "20px",
  }

var buttons = document.createElement("button");
var body = document.querySelector("body");
body.appendChild(buttons);
buttons.style.width = `${button.width}`;
buttons.style.padding = `${button.padding}`;
buttons.innerHTML = `${button.value}`;


  

