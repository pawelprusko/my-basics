import React from 'react';
import ReactDOM from 'react-dom';
import person from './zadanie06.js';


document.addEventListener('DOMContentLoaded', function(){
    
    ReactDOM.render(
        <div style = {{width: "300px", backgroundColor: "pink", padding: "3px"}}>
            <h1 style = {{textAlign: "center"}}>{person.name} {person.surname}</h1>
            <h2 style = {{textAlign: "center"}}>{person.jobTitle}</h2>
            <hr></hr>
            <h4 style = {{textAlign: "center"}}>{person.telNumber}</h4>


        
        
        </div>,
        document.getElementById('app')
    );
    

});