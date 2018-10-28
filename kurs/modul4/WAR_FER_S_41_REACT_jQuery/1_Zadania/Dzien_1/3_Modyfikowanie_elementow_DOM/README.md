<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# Modyfikowanie elementów

> Odpowiedzi wpisz w odpowiednich plikach, chyba że treść polecenia wskazuje inaczej.
Pamiętaj, żeby oddzielać ćwiczenia komentarzami i pisać czytelny, dobrze sformatowany kod.
Jeśli  polecenie w zadaniach brzmi: "Stwórz nową funkcję, w której wykonasz te czynności" to znaczy, że
należy stworzyć funkcję. Nawet jeśli treści zadań są mało skomplikowane
ucz się używać funkcji.

## Zadanie rozwiązywane z wykładowcą

### Dodawanie (~ 5min - 7min)

Stwórz element ```div``` o **klasie** ```info``` i wstaw go przed sekcją ```section-users```. Dodaj mu za pomocą jQuery dowolny tekst - np. "Zaczynamy kolejne zadania".

-----------------------------------------------------------------------------------------------------

## Zadania do samodzielnego wykonania


### Zadanie 1 (~ 15min - 20min)

Znajdź w pliku **index.html** element o **klasie** ```section-users```. Stwórz odpowiednią funkcję, wewnątrz której ustaw event ```submit``` na formularzu o id ```#formAdd```.
W evencie tym wykonaj następujące czynności:

1. Zablokuj domyślną akcję formularza
2. Pobierz pod odpowiednie zmienne pola o id ```name``` i ```age```
3. Pobierz pod 2 dodatkowe zmienne wartości pól z poprzedniego punktu
4. Wstaw nowy element na koniec listy, ustaw jej wiek jako atrybut ```data-age```.
5. Po każdym wstawieniu elementu wywołaj osobną funkcję, która będzie ustawiała klasę ```color-white``` odraz dany kolor dla wszystkich **li** w następujący sposób:
  * dla osób w wieku do 15 lat - **#75D701**,
  * dla osób mających od 16 do 40 lat - **#f9c00c**,
  * dla osób mających 41 lat i więcej - **#c03546**.
6. Wyczyść pola pobrane w pkt. 2
7. Dodaj warunek, który zapobiegnie dodawaniu nowych użytkowników jeżeli pola nie są wypełnione

### Zadanie 2 (~ 7min - 10min)

Zapoznaj się z plikiem **index.html**. Znajdź w nim elementy o klasach ```panel-left``` i ```panel-right```. Znajdź w nich elementy li o klasach ```list-element```.

Napisz funkcję, która po kliknięciu w element o **klasie** ```list-element```, przeniesie go do kolumny o **klasie** ```panel-right```.
Spróbuj dodać funkcjonalność, która będzie przenosiła taki element z lewa na prawo, i z prawa na lewo (podpowiedź - możesz sprawdzić w jakim rodzicu znajduje się ten element w chwili kliknięcia)
