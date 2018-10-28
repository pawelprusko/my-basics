$(function() {
$("section").addClass("section");

$("body").css("backgroundColor", "red");
});

var ulVar = $(".section-menu").find("ul");
ulVar.addClass("menu");
$(".menu").find("li").addClass("menu-element");

$(".section-main").find("li").addClass("main-element-bg main-element-color");

var linkis = $(".section-links").find("a");
linkis.addClass("links-element");
$(".links-element").first("a").addClass("links-element-first");
$(".links-element").last("a").addClass("links-element-last");
$(".links-element").eq(4).addClass("links-element-active");

//zad4
var idVar = $("#shape");
idVar.addClass("shape-star");
idVar.prev().addClass("shape shape-circle");
idVar.next().addClass("shape shape-square");

//zad5
var counter = $(".counter");
console.log(counter);
console.log(counter.children());
counter.children().eq(2).hide();
counter.children().eq(3).hide();
counter.children().eq(4).hide();

//zad6
var idLink = $("#codersLink").attr("href");
console.log(idLink);


//zad7
var formVar = $(".form").find("input");
formVar.each(function() {
    // console.log(this);
    // console.log($(this));
    console.log($(this).attr("value") )
    // console.log($(this).val()
    //  )
  });



