$(function(){

//zad1    
$(".border").css("border", "2px solid blue ");

//zad2
var firstVar = $("#menu");
var firstVarChildren = firstVar.children();
firstVarChildren.last().text("Jestem ostatnim dzieckiem");

//zad3
var menu = $("#menu li");
menu.each(function(){
    $(this).css("backgroundColor", $(this).data("color"));
});

//zad4
var clicks = 0;
$("[name=show-hide-btn]").on("click", function(e) {
    e.preventDefault();
console.log("działam");
 if (clicks === 0) {
     $(this).next().attr("type", "text");
     clicks = 1;
 } else {
     $(this).next().attr("type", "password");
     clicks = 0;
 };
})
























});