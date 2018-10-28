$(function () {
    url = "http://localhost:3000/movies";
    var list = $(".movie-list");

    function insertMovies(movies) {
        for (el of movies) {
            var liMovies = $(`<li class="movie">
            <div class="movie-content">
                <h3 class="movie-title">${el.title}</h3>
                <p class="movie-description">${el.description}</p>
            </div>
        </li>`);
        list.append(liMovies);

        }


    };

    function loadMovies() {
        $.ajax({
            url: url
        }).done(function (date) {
            console.log(date);
            insertMovies(date);




        })
    }
    loadMovies();

});