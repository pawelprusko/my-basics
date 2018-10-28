$(function() {
$("dt").on("mouseenter", function(){
    console.log($(this));
})


$(".hero-buttons button").on("click", function(e) {
e.preventDefault();
console.log($(this).data("feature"));

})
//zad1
var zad1 = $(".superhero-description").find("dd").hide();

var zad1Dd = $("dt");
zad1Dd.on("click", function() {
    if ($(this).next().css("display") === "none") {
        $(this).next().show() 
    } else {
        $(this).next().hide() 
    }
})

//zad2
var zad2 = $(".shopping-list").find("button");
var clicks = 0;
zad2.on("click", function(e) {

    if (clicks === 0) {
        $(this).parent().addClass("added");
    $(this).css("backgroundColor", "#0080ff");
    $(this).html("Dodano");
    clicks = 1;
    } else {
        $(this).css("backgroundColor", "red");
        clicks = 0;

    }
});
//zad za slacka - to samo, tylko w formie funckji (zad2)
function shoppingFunction() {
    var isAdded = 0;
    $(".shopping-list button").on("click", function(event) {
        event.preventDefault();
        if(isAdded === 0) {
            $(this).parent().addClass("added");
            $(this).css({"background": "#0080ff", 
                "color": "#fff"});
            $(this).text("Dodano");
            isAdded = 1;
        }
        else {
            $(this).parent().removeClass("added");
            $(this).css({"background": "#444", "color": "#fff"});
            $(this).text("Dodaj");
            isAdded = 0;
        }
    })
}





shoppingFunction()


});