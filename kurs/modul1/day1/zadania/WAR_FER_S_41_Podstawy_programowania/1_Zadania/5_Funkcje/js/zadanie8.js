function dawajKase (amount, raiting) {
    var totalAmount = 0;
    switch (raiting) {
        case "Bardzo dobra obsługa":
            return "Bardzo dziękujemy! Płacisz tylko " + (amount + (amount*0.25)) + " zł"
        break;

    }
}
console.log(dawajKase(30, "Bardzo dobra obsługa"))