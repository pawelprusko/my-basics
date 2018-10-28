import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
const num1 = prompt('podaj liczbę A');
const num2 = prompt('podaj liczbę B');

    ReactDOM.render(
        <h1>Wynik dodawanie: {Number(num1) + Number(num2)}</h1>,
        document.getElementById('app')
    );
});