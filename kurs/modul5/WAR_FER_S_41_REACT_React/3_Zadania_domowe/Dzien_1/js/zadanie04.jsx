import React from 'react';
import ReactDOM from 'react-dom';


document.addEventListener('DOMContentLoaded', function(){
    const theBest = "green";
    ReactDOM.render(
        <div style = {{color: `${theBest}`}}>{theBest}</div>,
        document.getElementById('app')
    );
    

});