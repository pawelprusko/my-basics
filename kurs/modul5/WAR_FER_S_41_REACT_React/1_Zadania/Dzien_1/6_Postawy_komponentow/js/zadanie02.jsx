import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    const Menu = () => {
        return (
        <ul>
        <li><a href={"https://www.onet.pl/"}>Strona główna</a></li>
        <li>Bloga<a></a></li>
        <li>Cennik<a></a></li>
        <li>Kontakt<a></a></li>
        </ul>
        // <li><a style={{}} href={"https://www.onet.pl/"}>Strona główna</a></li>
        )}
        
    

    ReactDOM.render(
        <Menu />,
        document.getElementById('app')
    );
});