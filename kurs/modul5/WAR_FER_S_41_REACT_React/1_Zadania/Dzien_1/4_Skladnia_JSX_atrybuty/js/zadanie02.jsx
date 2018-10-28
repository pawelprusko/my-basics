import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    //Funkcja generuje pseudolosowe liczby całkowite z zakresu 1-10.
    function genNumber(){
        return Math.round( Math.random() * 9 + 1 );
    }
    
    //Nie modyfikuj kodu powyżej
    let liczbaA = genNumber();
    let liczbaB = genNumber();
    let question = prompt(`Jaki jest wynik dodawanie liczby ${liczbaA} oraz liczby ${liczbaB}?`);
    let div = Number(liczbaA) + Number(liczbaB) === Number(question)
    ? <div style={{backgroundColor: "green"}}>Odpowiedź poprawna</div>
    : <div style={{backgroundColor: "red"}}>Odpowiedź była niepoprawna</div>



    ReactDOM.render(
        div,
        document.getElementById('app')
    );
});