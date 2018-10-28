$( function() {

    var movieList = $( '.list' );
    var movieUrl = 'https://swapi.co/api/films/';

    


    function insertContent( movies ) {
        //tutaj zrób pętlę po filmach
        //wygeneruj kolejne LI i wstaw do listy movieList
        for (var film in movies) {
            console.log(movies[film].title);
            var filmVar = $("<li>").text(movies[film].title);
            $(".list").append(filmVar); // lepiej .list zapisać do zmiennej - wydajniej
        }
    }

    function loadMovies() {
        //tutaj wykonaj połączenie Ajaxem
        $.ajax({
            url: movieUrl
        }).done(function(response){
            insertContent(response.results);
            console.log(response.results[0].title, "response")
        }).fail(function(error){
            console.log(error, "error")
        });
    }

    loadMovies();
});