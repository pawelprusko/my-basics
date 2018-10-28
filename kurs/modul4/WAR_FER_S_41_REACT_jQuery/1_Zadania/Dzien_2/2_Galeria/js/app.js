$( function() {

var apiUrl = "https://pixabay.com/api/";
var form = $(".form"); 
var gallery = $(".gallery");
var input = $(".form-search");

form.on("submit", function(event) {
    event.preventDefault();
    var inputValue = input.val();
    loadImages(inputValue);
});

function loadImages(searchQuery) {
$.ajax({
    url: apiUrl,
    data: {  ////dane których rząda od nas twórca api, rozmiar misia kolor oczu
        q: searchQuery,
        key: "6799546-801a9e48e0e142c05114f0377"  
    }
}).done(function(result){
    console.log(result);
    insertPhotos(result.hits);
}).fail(function(error){
    console.log(error, "error");
});
};
function insertPhotos(photos) {
    for (var el of photos) {
        var newPhoto = $("<img src="
        + el.largeImageURL + ">");
        newPhoto.addClass("gallery-img");
        gallery.append(newPhoto);
    }
}
});