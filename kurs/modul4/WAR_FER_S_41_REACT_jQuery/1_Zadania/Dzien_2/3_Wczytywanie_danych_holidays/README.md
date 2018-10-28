<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# Wykorzystywanie danych

> Odpowiedzi wpisz w odpowiednich plikach, chyba że treść polecenia wskazuje inaczej.
Pamiętaj, żeby oddzielać ćwiczenia komentarzami i pisać czytelny, dobrze sformatowany kod.
Jeśli  polecenie w zadaniach brzmi: "Stwórz nową funkcję, w której wykonasz te czynności" to znaczy, że
należy stworzyć funkcję. Nawet jeśli treści zadań są mało skomplikowane
ucz się używać funkcji.


## Zadania do samodzielnego wykonania

# Zadanie 1 (~ 15min - 20min)

Pod adresem https://holidayapi.com/ jest przechowywana baza świąt państwowych różnych krajów.
Aby z niej skorzystać trzeba wygenerować swój klucz API - wejdź na stronę i wygeneruj swój klucz.

Za pomocą funkcji ```ajax()``` wczytaj do elementu **ul** wszystkie daty świąt (jako elementy li).
Aby poprawnie wczytać dane w funkcji ```ajax()``` trzeba przekazać wymagane parametry,
o których mowa na stronie. Wykorzystaj do tego właściwość **date**.
**Uwaga** - daty mogą być tylko historyczne (nie bieżący rok).

Każdą nazwę święta wczytaj do elementu **li** jako element **h3.holiday-name**, a jego datę wczytaj do elementu **li** jako element **date.holiday-date**.

Podpowiedzi:
* Wczytaj dane i zobacz w konsoli jak wyglądają, pozwoli Ci to ustalić czego należy użyć, aby dostać się do nazw i dat świąt. Możesz tutaj wykorzystać też zakładkę Network.
