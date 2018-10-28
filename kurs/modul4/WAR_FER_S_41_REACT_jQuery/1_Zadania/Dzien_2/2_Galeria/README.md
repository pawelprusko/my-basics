<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# Galeria

> Odpowiedzi wpisz w odpowiednich plikach, chyba że treść polecenia wskazuje inaczej.
Pamiętaj, żeby oddzielać ćwiczenia komentarzami i pisać czytelny, dobrze sformatowany kod.
Jeśli  polecenie w zadaniach brzmi: "Stwórz nową funkcję, w której wykonasz te czynności" to znaczy, że
należy stworzyć funkcję. Nawet jeśli treści zadań są mało skomplikowane
ucz się używać funkcji.


## Zadania do samodzielnego wykonania
Twoim zadaniem będzie stworzenie dynamicznej wyszukiwarki grafik.

Pod linkiem https://pixabay.com znajduje się strona, która udostępnia darmowe grafiki. Na samym dole znajduje się link
[API](https://pixabay.com/pl/service/about/api/) który prowadzi do darmowego API.
Aby skorzystać z tego API trzeba się zarejestrować. Możesz to zrobić na [tej stronie](https://pixabay.com/pl/accounts/register/) lub klikając na górze strony w link **Zarejestruj się**.
Po zarejestrowaniu się wróć na powyższą [stronę API](https://pixabay.com/pl/service/about/api/) i kliknij w zielony przycisk **Get Started**.
Na [stronie która się ukaże](https://pixabay.com/api/docs/#api_search_images) będą opisane wszystkie parametry które będziemy wysyłać oraz wymagany klucz, który został dla nas utworzony.


### Wczytanie danych  (~ 15min - 30min)
Stwórz zmienne:
- **apiUrl** - link do powyższego api
- Podstaw pod zmienne elementy, na których będziemy działać - to jest formularz, input o klasie ```.form-search``` i element o klasie ```.gallery-list```

Dodaj do formularza zdarzenie **submit** w którym:
- wyłącz domyślną akcję formularza
- pobierz wartość pola

Kolejnym krokiem będzie wczytanie danych.
Na końcu powyższego eventu submit odpal funkcję ```loadImages(searchQuery)```, którą zaraz napiszemy. Parametr searchQuery będzie powyżej pobraną wartością pola wyszukiwarki.

Napisz funkcję ```loadImages(searchQuery)```, i wywołaj ją na końcu powyższego eventu submit.
Funkcja ta będzie robić połączenie Ajax, w którym musimy wysłać odpowiednie dane. [Dwie z nich](https://pixabay.com/api/docs/#api_search_images) są wymagane - **key** i parametr **q** który oznacza szukaną frazę. Reszta parametrów wedle uznania.

Przykładowe połączenie które zrób w tej funkcji może mieć postać:

```
...
$.ajax({
    url : apiUrl,
    data : {
        q : searchTerm,
        key : "...."
    }
}).done(function(result) {
    ...
})
...
```

Po zakończeniu połączenia wypisz rezultat w konsoli, oraz sprawdź jak wygląda. Możesz też skorzystać z zakładki Network.

Następnie zrób pętlę po otrzymanych danych, wygeneruj elementy galerii i wstaw je do galerii. Przykładowy element, który możesz wygenerować znajdziesz w pliku **index.html**. Do tworzenia bardziej skomplikowanych kawałków html (tak jak w tym przypadku) możesz skorzystać z [template string](https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/template_strings).
Przed wstawieniem nowych elementów wyczyść zawartość galerii odpowiednią metodą jQuery.

### Przeciwdziałanie nadmiarowości (~ 10min)
W chwili obecnej wyszukiwarka powinna już działać. Problem pojawi się w momencie, gdy użytkownik szybko zacznie klikać w przycisk wyszukiwania. Poprzednie połączenia się nie zakończą, a już będą wysyłane kolejne. Musimy temu zapobiec.

Na początku wysyłki formularza - tuż po zablokowaniu domyślnej akcji znajdź w formularzu przycisk submit i podstaw go pod zmienną.
Dodaj temu przyciskowi atrybut ```disabled``` i ustaw go na true. Dodaj mu także klasę ```.loading```.
Po zakończeniu dodawania wczytanych elementów do galerii submitowi usuń atrybut ```disabled``` i klasę którą prze chwilą mu dodałeś.
Jeżeli chcesz możesz też klasę loading na czas wczytywania dodać do elementu galerii.

Przetestuj teraz mechanizm, który napisałeś.
Przejdź do zakładki Network w debugerze i przełącz opcję symulowania szybkości połączenia (na prawo na górnej belce tej zakładki - tuż obok opcji Offline) na wolne łącze. Po testach wróć do normalnego ustawienia.

### Lightbox (~ 10min - 15min)
Jedną z największych zalet jQuery był i jest olbrzymi zbiór gotowych pluginów. W tym przypadku chcemy do naszej wyszukiwarki dodać lightbox - czyli przeglądarkę zdjęć z przyciemnionym tłem. Jeżeli w internecie wyszukasz frazę "jquery lightbox" jednym z pierwszych wyników będzie fancybox.

Przejdź na stronę http://fancyapps.com/fancybox/3/

Na początku strony znajduje się opis "Quick  Start". Musimy dodać do naszej strony 2 pliki - plik ze stylami i skrypt z biblioteką.

```
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.4.1/jquery.fancybox.min.css" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.4.1/jquery.fancybox.min.js"></script>
```

Pamiętaj by skrypt z biblioteką umieścić **za** skryptem z jquery.

Do tworzonych wcześniej linków (tych w funkcji ```loadImages```) dodaj atrybut ```data-fancybox="gallery"```.
Od tej pory po kliknięciu na wczytaną miniaturkkę odpali się lightbox z powiększeniem grafiki.

