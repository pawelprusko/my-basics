import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    const colors = ["blue", "yellow", "green", "brown", "pink"];

    ReactDOM.render(
        <div>{colors.join(",")}</div>,
        document.getElementById('app')
    );
});