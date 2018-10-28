import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    //Nie modyfikuj kodu powyżej

    const redDiv = <div style={{height: "100px", width: "100px", backgroundColor: "red"}}></div>;
    const greenDiv = <div style={{height: "100px", width: "100px", backgroundColor: "green"}}></div>;
    const blueDiv = <div style={{height: "100px", width: "100px", backgroundColor: "blue"}}></div>;

    //Nie modyfikuj kodu poniżej
    ReactDOM.render(
        <div>
            {redDiv}{greenDiv}{blueDiv}
        </div>,
        document.getElementById('app')
    );
});