//zad1
$(function() {
$(".form").on("submit", function() {
    event.preventDefault();
    var raz = $(".form-control").val();
    var liEle = $("<li>");
    var liEleSpan = $("<span class='user-name'></span>");
    liEleSpan.append(raz);
    liEle.append(liEleSpan);
    var button1 = $("<button class='btn-delete'>Usuń</button>");
    $(".user-list").append(liEle);
    liEle.append(button1);
    var editButton = $("<button class='btn-edit'>Edytuj</button>");
    liEle.append(editButton);

});
$(".user-list").on("click", ".btn-delete", function() {
    $(this).parent("li").slideUp(function() { //zwijamy LI
        $(this).remove(); //po czym to LI usuwamy
    });
});

 var editButton = $("<button class='btn-edit'>Edytuj</button>");
 $(".user-list li").append(editButton);


 $(".user-list").on("click", ".btn-edit", function() {
    if( $(this).text() ==='Edytuj') {
         $(this).text('zatwierdz');
         $(this).siblings('span').replaceWith("<input type=\"text\" class=\"form-control\" placeholder=\"Imię i nazwisko\" id=\"name\">");
    } else {
        var inputValue = $(this).siblings("#name").val();
        $(this).siblings('input').replaceWith('<span class="user-name"></span>');
        $(this).siblings("span").text(inputValue)
        $(this).text('edytuj');
    }
})





// $('span').on('click', function() {
//     $(this).replaceWith(`<input type="text" value="${$(this).text()}" />`)
// })

// $('input').on('click', function() {
//     $(this).replaceWith(`<span>${$(this).val()}</span>`)
// })
 })