import React from 'react';
import ReactDOM from 'react-dom';

let birthDate = prompt('Podaj datę urodzenia');
let date = (new Date()).getFullYear();

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <h1>Wiek użytkownika to:{date - Number(birthDate)}</h1>,
        document.getElementById('app')
    );
});