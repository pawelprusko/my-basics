<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# Eventy zaawansowane

> Odpowiedzi wpisz w odpowiednich plikach, chyba że treść polecenia wskazuje inaczej.
Pamiętaj, żeby oddzielać ćwiczenia komentarzami i pisać czytelny, dobrze sformatowany kod.
Jeśli  polecenie w zadaniach brzmi: "Stwórz nową funkcję, w której wykonasz te czynności" to znaczy, że
należy stworzyć funkcję. Nawet jeśli treści zadań są mało skomplikowane
ucz się używać funkcji.

## Zadanie rozwiązywane z wykładowcą

### Ukrywanie  (~ 5min)
Znajdź w pliku **index.html** element o **klasie** ```form```. Dodaj mu event ```submit```, w którym:
- wyłączy domyślną akcję formularza
- zbierz dane z formularza
- stwórz nowy element LI i dodaj go na koniec listy o klasie ```user-list```

Pod eventem submit (ale nie wewnątrz) podepnij do przycisków **Usuń** event, który usunie dane LI.
Możesz wykorzystać poniższy kod:

```
$(".btn-delete").on("click", function() {
    $(this).parent("li").slideUp(function() { //zwijamy LI
        $(this).remove(); //po czym to LI usuwamy
    });
});
```

Jak zauważysz, powyższy kod nie działa prawidłowo. Początkowo istniejące LI są usuwane, ale te dodane przez formularz już nie.
Spróbuj go poprawić tak by usuwanie działało dla wszystkich elementów.

-----------------------------------------------------------------------------------------------------

## Zadania do samodzielnego wykonania

### Zadanie 1 (~ 20min - 25min)
* do każdego LI dodaj przycisk ```Edytuj``` o klasie ```btn-edit``` (najlepiej przed przyciskiem ```btn-delete```),
* napisz funkcję, która po kliknięciu w przycisk ```Edytuj``` &ndash; umożliwi edycję elementu.
W trakcie edycji zmień nazwę na przycisku z ```Edytuj``` na ```Zatwierdź```. Po klinięciu w ```Zatwierdź```
Zakończ edycję.

Wyzwanie dla chętnych: w trakcie edycji możesz spróbować zamienić **span** na **input:text**, który będzie miał odpowiednie value, a po zakończeniu edycji input zamienić z powrotem na span.
Wykorzystaj tutaj metodę jQuery [replaceWith](http://jqapi.com/#p=replaceWith)
