import React from 'react';
import ReactDOM from 'react-dom';

const messageName = prompt('POdaj swoje imię');
const messageAge = prompt('A teraz podaj swój wiek');
document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <div>Twóje imię to {messageName} i masz {messageAge} lat.</div>,
        document.getElementById('app')
    );
    

});