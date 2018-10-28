var car = {
    brand: "mercedes",
    color: "czerny",
    numbersOfKilometers: 0,
    printCarInfo: function(){
    console.log(`
        kolor: ${this.brand},
        marka${this.color},
        przejechane km: ${this.numbersOfKilometers}
        `);
},
    drive: function(km){
    this.numbersOfKilometers += km;
},
}
car.printCarInfo();
car.drive(890);
car.printCarInfo();

car.przeglady = ["2019", "2020"];

car.methodOfPrzeglady = function(data){
    this.przeglady.push(data);
}

console.log(car.przeglady);
car.methodOfPrzeglady(2090);
console.log(car.przeglady);

car.methodAll = function(){
    for (var key of this.przeglady)
    console.log(key)
}
document.addEventListener("DOMContentLoaded", function(){

});

});
;