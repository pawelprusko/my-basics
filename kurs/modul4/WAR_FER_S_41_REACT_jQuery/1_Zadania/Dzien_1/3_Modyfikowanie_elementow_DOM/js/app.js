$(function() {
var newDiv = $("<div>", {class: "info" }).text("Zaczynamyyyy!");
$(".section-users").before(newDiv);

//zad1
$(".section-users").find("form").on("submit", function(event){
    event.preventDefault();
    var name = $("#name");
    var age = $("#age");
    var nameVal = name.val();
    var ageVal = age.val();

    if (nameVal !== "" && ageVal !== "") {
    var liAppend = $("<li>").attr("data-age", ageVal);
    var liAppendSpan = $("<span>");
    liAppendSpan.text(nameVal);
    $(".user-list").append(liAppend);
    liAppend.append(liAppendSpan);
}

    var userListLi = $(".user-list li");
    userListLi.each(function(){
        if ($(this).data("age") <= 15) {
            $(this).css("backgroundColor", "#75D701");
        } else if ($(this).data("age") > 15 && $(this).data("age") <= 40) {
                $(this).css("backgroundColor", " #f9c00c");
        } else if ($(this).data("age") > 40) {
            $(this).css("backgroundColor", "#c03546");
    };
    
    });
    console.log(nameVal);
    name.val("");
    age.val("");
    });

//zad2
// var left = $(".list-left");
// var right = $(".list-right");
// var listEl = $(".list-left").find(".list-element");
// listEl.on("click", function() {
//     if ($(this).parent().hasClass("list-left")) {
//         right.append($(this))

//     } else {
//         left.append($(this))
//     }
// })










});