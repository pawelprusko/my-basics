import React from 'react';
import ReactDOM from 'react-dom';


document.addEventListener('DOMContentLoaded', function(){
    const size = "400px";
    ReactDOM.render(
        <div style = {{backgroundColor: "blue", width: `${size}`, height: `${size}`}}></div>,
        document.getElementById('app')
    );
    

});