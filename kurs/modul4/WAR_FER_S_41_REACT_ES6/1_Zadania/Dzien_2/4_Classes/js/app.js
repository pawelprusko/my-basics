$(function() {
class Vehicle {


}
class Boat extends Vehicle {
    swim() {
        console.log("I can swim")
    }
}

class Car extends Vehicle {
    swim() {
        console.log("I can drive")
    }
}

class Plane extends Vehicle {
    swim() {
        console.log("I can fly")
    }
}

let boat = new Boat();
boat.swim();


class Kaczka {
    constructor(type) {
        this.type = "zwykla kaczka"
    }
    kwacz(vat) {
        console.log(`kwaa ${vat}`)
    }
    wyswietl() {
        console.log(`Wygląda jak ${this.type}`)
    }
    lec() {
        console.log("Lecęę!!!")
    }
}
let kaczka = new Kaczka();
kaczka.kwacz("buuu");
kaczka.wyswietl();

class DzikaKaczka extends Kaczka{
    constructor(type) {
        super(type);
       // this.type = "krzyzowka"

    }
    lec() {
        console.log("kaczki nie latają!!!");
        console.log(super.lec()); /// wtedy odwolujemy sie do klasy extends
    }
}
let kaczka2 = new DzikaKaczka();
kaczka2.wyswietl();
kaczka2.lec();

class KrzyzowkaKaczka {

}

});
