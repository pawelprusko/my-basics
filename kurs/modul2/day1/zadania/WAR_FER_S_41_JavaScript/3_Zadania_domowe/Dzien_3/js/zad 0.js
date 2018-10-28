/*
1) -----------------------------------------

    Poniżej masz tablice użytkowników.
    */
var users = [
    //id name surname email age value
    [1, "Shauna", "Bradnocke", "sbradnocke0@altervista.org", 20, 108.28],
    [2, "Mela", "Redman", "mredman1@nps.gov", 24, 267.37],
    [3, "Othelia", "Lemon", "olemon2@slashdot.org", 15, 748.06],
    [4, "Meier", "Cockell", "mcockell3@icio.us", 32, 1951.64],
    [5, "Shellysheldon", "Gronowe", "sgronowe4@cnbc.com", 16, 1040.54],
    [6, "Francisca", "Tofanini", "ftofanini5@gnu.org", 21, 1544.08],
    [7, "Cliff", "Underwood", "cunderwood6@addtoany.com", 10, 451.21],
    [8, "Caron", "Falshaw", "cfalshaw7@hugedomains.com", 27, 1968.72],
    [9, "Anitra", "Warters", "awarters8@intel.com", 12, 380.68],
    [10, "Caitrin", "Baudrey", "cbaudrey9@ihg.com", 13, 1385.44],
    [11, "Reginald", "Beavers", "rbeaversa@elegantthemes.com", 15, 1205.52],
    [12, "Marleen", "Aickin", "maickinb@purevolume.com", 20, 1434.10],
    [13, "Lisa", "MacSorley", "lmacsorleyc@ocn.ne.jp", 17, 1567.07],
    [14, "Kimberli", "Berkeley", "kberkeleyd@merriam-webster.com", 19, 1994.97],
    [15, "Tawnya", "Illingworth", "tillingworthe@quantcast.com", 23, 1742.64]
]

/*
Jest to bardzo zła forma danych - czemu?.
    Twoim zadaniem jest napisanie funkcji fixData, która
przyjmie 1 tablicę ze złymi danymi i zwróci poprawioną tablicę OBIEKTÓW
gdzie każdy z nich będzie miał klucze:
    id, name, surname, email, age, cash
pod które podstawisz kolejne dane z podtablicy. Podstawianie zrób ręcznie np.
    name : el[0]
2) -----------------------------------------
    Wygeneruj nową tablice z obiektami wykorzystując funkcję z 1 zadania
- Wylicz ile pieniędzy mają wszyscy użytkownicy razem.
- Wylicz średni wiek wszystkich użytkowników
3) -----------------------------------------
    a)
Napisz konstruktor "HTMLInfo" który będzie miał 2 początkowe właściwości:
    - this.selector - string podawany przy tworzeniu instancji. Oznacza selektor użyty do pobrania elementów.
    np. ".btn"
- this.elements - pseudo tablica elementów pobranych ze strony przy wykorzystaniu powyższego selektora
np. document.querySelectorAll(this.selector)
Załóżmy, że zawsze pobieramy wiele elementów - nawet jak wiemy, że będzie tylko jeden.
    Niech konstruktor ma dodatkowe wspólne dla wszystkich instancji metody:
    - showElements - wypisuje w konsoli wszystkie elementy "elements"
- showTags - wypisuje w konsoli tagi elementów "elements"
- showCount - wypisuje liczbę elementow "elements"
- showClass - wypisuje klasy wszystkich elementów "elements"
- showHtml - wypisuje html z wszystkich elementów "elements"
b)
Stwórz w html 10 buttonów z klasą ".btn" i 10 divów z klasą ".div":
Możesz skopiować poniższą linijkę w html, ustawić kursor na jej końcu i nacisnąć tab
button.btn{Klik $$}*10+div.div{Jestem div $$}*10
c)
Stwórz na bazie konstruktora 2 instancje HTMLInfo.
    Dla pierwszej przekaż selektor ktorym pobierzesz wszystkie buttony (może być po klasie)
DLa drugiego przekaż selektor pobierający wszystkie divy.
    Dla obu instancji odpal wszystkie metody.
4) -----------------------------------------
    Stwórz obiekt który ma:
    - właściwość time - czas ok 2000
- właściwość pets, która zawiera tablicę kilku zwierzaków
- właściwość print - która po czasie "time" zrobi pętlę po tablicy pets
i wypisze w konsoli każde zwierzątko dużymi literami
*/

function fixData(element) {
    var tab1 = [];
    for (el of element) {
        var obj = {
            id: el[0],
            name: el[1],
            surname: el[2],
            email: el[3],
            age: el[4],
            cash: el[5],
        }
        tab1.push(obj);
    }
    return tab1
}

console.log(fixData(users));
//zad2

var second = fixData(users);
var money = 0;
for (el of second) {
    money += el.cash;
}
console.log(money);

var ages = 0;
var srednia = 0;
for (el of second){
    ages += el.age;
    srednia = ages/second.length;
}
console.log(srednia);

function HTMLInfo(element) {
this.selector = element;
this.elements = document.querySelectorAll(this.selector);
}
HTMLInfo.prototype.showElements= function(){
    console.log(this.elements);

}

var firstInstant = new HTMLInfo('div');
firstInstant.showElements();



var ob = {
    time: 100,
    pets: ["malpa", "lew", "orzel"],
    print: function() {
        var that = this;
        setTimeout(function() {
            console.log(that);
            for (el of that.pets) {
                console.log(el);
            }
        }, this.time);
    }
}
ob.print();







