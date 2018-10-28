//zad1
$(function() {
const array = [2,4,6,8];
const multiplyArray = array.map(el => el*2);
console.log(multiplyArray);

//zad2
function Weather(temperature) {
    this.temperature = temperature;
    }  
Weather.prototype.getAvgTemperature = function() {
    const sumTemperature = this.temperature.reduce((sum, el) => {
         return sum = sum + el
    },0);
    let avgTemperature = sumTemperature/this.temperature.length;
    return avgTemperature
}
let day1 = new Weather([2,4,60]);
const avgClass = $(".avg");
avgClass.append(day1.getAvgTemperature());

//zad3
var button = $("button");
button.on("click", (event) => {
    $(event.currentTarget).next().toggle(); //.toggle()
})
});

