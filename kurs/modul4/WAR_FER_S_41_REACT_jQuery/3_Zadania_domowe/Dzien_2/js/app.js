$( function() {
    var name = $("h1");
    var HP = $("li").eq(0);
    var attack = $("li").eq(1);
    var defense = $("li").eq(2);
    var evolution = $(".evolution-chain");
    var apiUrl = "https://pokeapi.co/api/v2/pokemon/4/";
    var apiUrlEvolution = "https://pokeapi.co/api/v2/evolution-chain/2/";

    function pokemon() {
        $.ajax({
            url: apiUrl,
        }).done(function(response){
            name.text(response.name);
            HP.text(`HP: ${response.stats[5].base_stat}`);
            attack.text(`Punkty ataku: ${response.stats[4].base_stat}`);
            defense.text(`Obrona: ${response.stats[3].base_stat}`);
        }).fail(function(error){
            console.log(error, "error")
        });
    };
    function pokemonEvolution() {
        $.ajax({
            url: apiUrlEvolution,
        }).done(function(response){
            evolution.text(`Ewoluuje w: ${response.chain.species.name} --> ${response.chain.evolves_to[0].species.name} --> ${response.chain.evolves_to[0].evolves_to[0].species.name}`)
        }).fail(function(error){
            console.log(error, "error")
        });
    };

    pokemon();
    pokemonEvolution();

    






});