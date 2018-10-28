<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# Zaawansowany HTML i CSS - Snippety
> Kilka ważnych informacji


Przed przystąpieniem do rozwiązywania zadań przeczytaj poniższe wskazówki

### 1. Jak zrobić prosty formularz logowania?
Zwróć uwagę jakie pola zostay wykorzystane do jego stworznia.

```html
<form class="form">
    <fieldset>
        <legend>Logowanie</legend>

        <input type="email" placeholder="Email">
        <input type="password" placeholder="Password">

        <label for="remember-me">
            <input id="remember-me" type="checkbox"> Zapamiętaj mnie
        </label>

        <button type="submit" class="button"></button>
    </fieldset>
</form>
```

### 2. Wyśrodkowanie elementu w pionie i poziomie wewnątrz innego elementu

```html
<div class="one">
    <div class="two">
    </div>
</div>
```

```css
.one {
    display: flex;
    justify-content: center;
    align-items: center;
}

.two {
    width: 50px;
    height: 50px;
    background-color: red;
}
```
Więcej informacji znajdziesz [pod tym linkiem](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).
