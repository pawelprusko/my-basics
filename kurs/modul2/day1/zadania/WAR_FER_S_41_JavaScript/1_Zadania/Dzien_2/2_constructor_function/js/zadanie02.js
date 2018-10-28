function Calculator() {
this.tab = [];
}
Calculator.prototype.add = function(num1, num2) {
    var suma = num1 + num2;
    var wys = `Added ${num1} and ${num2} got result ${suma}`;
    this.tab.push(wys);
}
Calculator.prototype.multi = function(num1, num2) {
    var suma = num1*num2;
    var wys = `multiply ${num1} and ${num2} got result ${suma}`;
    this.tab.push(wys);
}
Calculator.prototype.substract = function(num1, num2) {
    var suma = num1 - num2;
    var wys = `substract ${num1} and ${num2} got result ${suma}`;
    this.tab.push(wys);
}
Calculator.prototype.divide = function(num1, num2) {
    var suma = num1/num2;
    var wys = `Divide ${num1} and ${num2} got result ${suma}`;
    this.tab.push(wys);
}
Calculator.prototype.printOperations = function() {
    console.log("Wszystkie operacje");
    for (var el of this.tab) {
        console.log(el);
    }
}
Calculator.prototype.clearOperations = function() {
    this.tab = [];
    }


var first = new Calculator();
first.add(2,3);
first.multi(2,3);
first.divide(2,3);
first.substract(2,3);
first.printOperations();
first.clearOperations();
console.log(first);