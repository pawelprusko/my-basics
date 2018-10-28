// Różne koszyki dla różnych klientów (~ 10min - 15min)
// W pliku app.js stwórz konstruktor Basket. Na jego bazie stwórz obiekt, który będzie miał następujące pola:

// products - tablica z wszystkimi produktami
// sum - kwota do zapłaty za wszystkie produkty
// Do prototypu konstruktora dodaj metody:

// addProduct(name, price), która jako parametry będzie przyjmowała nazwę produktu oraz jego cenę. Cenę podawaj jako typ number, a nazwę jako string. Umieść te dane jako obiekt w tablicy this.products.
// showBasket(), której zadaniem będzie wyświetlenie wszystkich produktów z koszyka wraz ceną, oraz kwotą do zapłaty.
// Przykładowe wywołanie:

// var aliceBasket = new Basket();
// aliceBasket.addProduct("pomidor",10);
// aliceBasket.addProduct("arbuz",40);
// aliceBasket.showBasket();

// var bruceBasket = new Basket();
// bruceBasket.addProduct("rice", 10);
// bruceBasket.addProduct("grzyby mun",50);
// bruceBasket.addProduct("tofu",20);
// bruceBasket.showBasket();

function Basket() {
    this.products = [];
    this.sum = 0;
}
Basket.prototype.addProduct = function(name, price) {
    var prod = {
        name : name,
        price : price
    }
    this.sum += price;
    this.products.push(prod);
}
Basket.prototype.showBasket = function() {
    console.log("Cena produktów, to " this.sum);
    for (var el of this.products) {
        console.log(el.name, el.price);
    }
}

var aliceBasket = new Basket();
aliceBasket.addProduct("pomidor", 10);
aliceBasket.addProduct("arbuz", 40);
aliceBasket.showBasket();

var bruceBasket = new Basket();
bruceBasket.addProduct("batbumerang", 10000);
bruceBasket.addProduct("peleryna", 20000);
bruceBasket.showBasket();

