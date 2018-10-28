import React from 'react';
import ReactDOM from 'react-dom';
import person from './zadanie02';
import animals from './zadanie05';

document.addEventListener('DOMContentLoaded', function(){


    ReactDOM.render(
        <div>
        <div> {person.title} {person.name} ma {person.age} lat. </div>
        <div>Ilość zwierząt: {animals.length}</div>
        <div>{animals.join(",")}</div>
        </div>,
    
        document.getElementById('app')
    );
});