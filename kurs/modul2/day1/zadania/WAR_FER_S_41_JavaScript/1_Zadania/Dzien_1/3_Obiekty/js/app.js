var book = {
    title: "Potop",
    author: "Sienkiewicz",
    numberOfPages: 999
}
console.log(book.title);
console.log(book.author);
console.log(book.numberOfPages);

var person = {
    name: "Pawel",
    age: 18,
    sayHello: function(){
        console.log("Hello")
    }
}
console.log(person.name);
console.log(person.age);
person.sayHello();

var przepis = {
    title: "sernik",
    serving: 12
}
 przepis.ingrediens = [1,4,5,6];
console.log(przepis.ingrediens);

console.log("zad.5");

var spoon = {
    isExist: true
}

var fork = spoon;
fork.isExist  = false;

console.log(fork.isExist)