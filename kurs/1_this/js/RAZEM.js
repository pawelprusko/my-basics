var car = {
    brand: "mercedes",
    color: "czerny",
    numbersOfKilometers: 0,
    printCarInfo: function(){
        console.log(`
        kolor: ${this.brand}
        marka${this.color}
        przejechane km: ${this.numbersOfKilometers}
        `);
    },
drive: function(km){
        this.numbersOfKilometers+= km;
}

}
car.printCarInfo();
car.drive()
