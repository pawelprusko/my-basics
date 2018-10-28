function rockPaperScissor(player1, player2) {
    switch (true) {
        case player1==player2:
            return "remis"
        break;
        case (player1 == "kamień" && player2 == "nożyce")
            || (player1 == "nożyce" && player2 == "papier")
            || (player1 == "papier" && player2 == kamień):
                return "wygrał player1"
        break;
        case (player2 == "kamień" && player1  =="nożyce")
            || (player2 == "nożyce" && player1 == "papier")
            || (player2 == "papier" && player1 == kamień):
                return "wygrał player1"
        break;
        default: /*UZYWAMY TYLKO W SWITCH (DEFAULT) */ return "błąd"
    }
}
console.log(rockPaperScissor("nożyce", "nożyce"))