<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# Modyfikacja danych

> Odpowiedzi wpisz w odpowiednich plikach, chyba że treść polecenia wskazuje inaczej.
Pamiętaj, żeby oddzielać ćwiczenia komentarzami i pisać czytelny, dobrze sformatowany kod.
Jeśli  polecenie w zadaniach brzmi: "Stwórz nową funkcję, w której wykonasz te czynności" to znaczy, że
należy stworzyć funkcję. Nawet jeśli treści zadań są mało skomplikowane
ucz się używać funkcji.


## Zadania do samodzielnego wykonania

# Zadanie 1 (5min)
Zainstaluj json-server i uruchom.
W folderze db znajdziesz plik ```movies.json```. Jest to baza filmów, z której będziemy korzystać.

Dodaj do pliku jQuery, a następnie pobierz w skrypcie wszystkie elementy na których będziesz wykonywał jakieś czynności (formularz, inputy i listę)


# Zadanie 2 (~ 15min - 30min)
Stwórz funkcję ```loadMovies()```, której zadaniem będzie za pomocą Ajax wczytanie danych z serwera.
Po wczytaniu danych wypisz je w konsoli. Odpal też funkcję ```insertMovies(movies)```, którą za chwilę napiszemy. Przekaż do niej pobrane dane.


# Zadanie 3 (~ 15min - 30min)
* Stwórz funkcję ```insertMovies(movies)```, do której przekażesz wczytane w poprzednim zadaniu dane. Zadaniem tej funkcji będzie zrobienie pętli po przekazanych danych, stworzenie nowych LI i wstawienie ich do listy na stronie. Przykładowy kod pojedynczego LI ma postać:

```
<li class="movie">
    <div class="movie-content">
        <h3 class="movie-title">Tytuł filmu</h3>
        <p class="movie-description">Opis filmu</p>
    </div>
</li>
```

Do stworzenia kodu pojedynczego LI możesz użyć [template strings](https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/template_strings) lub pojedynczo tworzyć odpowiednie elementy i dołączać je do tworzonego LI.


# Zadanie 4 (~ 15min - 20min)
Stwórz funkcję ```addMovie(title, description)```, której celem będzie za pomocą Ajax dodanie nowego filmu do bazy danych. Przekaż do niej odpowiednie parametry, a następnie zrób połączenie o odpowiedniej metodzie, w którym wyślesz tytuł i opis filmu. Parametru ID wysyłać nie musisz - jest generowane automatycznie po stronie bazy danych.
Po wysłaniu danych na serwer możesz odpalić funkcję ```loadMovies()``` by lista wczytała się na nowo z dodanym już filmem.

W kolejnym kroku poza funkcją addMovie podepnij się pod event submit formularza (zatrzymując jego domyślną akcję). W evencie tym pobierz dane z pól formularza, a następnie odpal funkcję ```addMovie(title, description)``` przekazując do odpowiednie dane.


# Zadanie 5 (~ 15min - 20min)
Zadanie polega na usunięciu filmu z bazy. Działanie będzie analogiczne do poprzednich punktów. W tym celu:
* stwórz funkcję ```removeMovie(id)```, której celem będzie wykonanie połączenia Ajax. Po zakończeniu połączenia tak samo jak w poprzedniej funkcji znowu wywołamy funkcję ```loadMovies()``` by odświeżyć listę filmów. Pamiętaj, że jeżeli chcesz usunąć film o **id=2**, to wysyłasz żądanie o metodzie DELETE pod adres http://localhost:3000/movies/2.
* wróć do funkcji z zadania 3 (tworzącego LI) i zmodyfikuj ją tak, aby przy tworzeniu nowego LI dodawała na jego końcu button ```Usuń``` o klasie ```.btn-delete```.
* Poza funkcją (najlepiej pod eventem submit, który powyżej napisaliśmy) dodaj nowy event dla wszystkich przycisków Usuń. Nowe elementy LI będą tworzone dynamicznie, więc nie możesz się tutaj podpiąć bezpośrednio pod przyciski. Wykorzystaj wiedzę z działu "Zaawansowane eventy".
* Po kliknięciu na przycisk powinieneś wywołać funkcję ```removeMovie(id)``` przekazując do niej **id** usuwanego filmu. Skąd te id pobrać? Przy tworzeniu nowych LI możesz każdemu z nich dodać atrybut **data-id** podstawiając mu wartość wziętą z danych zwróconych przy wczytywaniu filmów (tak samo jak wstawiasz tytuł i opis). Klikając w przycisk powinieneś pobrać to LI (jest rodzicem przycisku) i pobrać jego atrybut ```data-id```.


# Zadanie 4 (~ 20min - 25min)
Zmodyfikuj film na serwerze. W tym celu:
1. Stwórz funkcję ```updateMovie(id, title, description)```, która podobnie do poprzednich zadań wykona połączenie wysyłając dane na serwer metodą PUT. Dane powinny być wysłane na odpowiedni adres - podobnie jak przy usuwaniu filmu.
2. Wróć do funkcji z zadania 3 i zmodyfikuj ją tak, aby przy tworzeniu nowych LI dodawała do nich również przycisk ```Zmodyfikuj``` o klasie ```.btn-edit```.
3. Analogicznie do przycisków ```.btn-delete``` dodaj nowy event click się pod przyciski ```.btn-edit```.
4. Po kliknięciu na pojedynczy przycisk ```.btn-edit``` wykonaj następujące czynności:
  - pobierz pod zmienną najbliższe LI (rodzica przycisku)
  - pobierz pod zmienną ```id``` id danego filmu.
  - włącz lub wyłącz dla tego LI klasę ```editable```. Skorzystaj tutaj z funkcji [toggleClass()](http://jqapi.com/#p=toggleClass).
  - w kolejnym kroku sprawdzimy czy dane li ma klasę ```editable``` czy jej nie ma. W zależności od wyniku włączymy tryb edycji lub go wyłączymy.
  W tym celu w instrukcji if sprawdź czy dane LI ma klasę ```editable```. Wykorzystaj do tego funkcję jQuery [hasClass()](http://jqapi.com/#p=hasClass)
    - jeżeli LI ma klasę editable to:
      1. Pod zmienne pobierz wartość tytułu i opisu filmu
      2. zamień tytuł na input tekstowy o klasie ```.movie-title``` i value który przed chwilą pobrałeś. Wykorzystaj do tego funkcję [replaceWith()](http://jqapi.com/#p=replaceWith)
      2. zamień opis na input tekstowy o klasie ```.movie-description``` i value które przed chwilą pobrałeś.
      3. Zmień tekst na przycisku na ```Zapisz```
    - jeżeli LI nie ma klasy editable to:
      1. Pod zmienne pobierz wartość tytułu i opisu filmu (tym razem są to pola tekstowe!)
      2. zamień tytuł na h3 o klasie ```.movie-title``` i tekście który przed chwilą pobrałeś.(http://jqapi.com/#p=replaceWith)
      2. zamień opis na div o klasie ```.movie-description``` i tekście które przed chwilą pobrałeś.
      3. Zmień tekst na przycisku na ```Edytuj```
      4. Odpal funkcję ```updateMovie(id, title, description)``` którą napisałeś, przekazując do niej pobrane przed chwilą dane.
