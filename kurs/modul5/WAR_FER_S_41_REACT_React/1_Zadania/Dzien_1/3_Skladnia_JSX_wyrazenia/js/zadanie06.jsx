import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    const age = prompt('podaj wiek');
    let ifAge = (age1) => {
        if (age1 < 18) {
            return <div id="youth">masz poniżej 18 lat, a dokładnie {age} lat</div>
        } else {
            return <div id="adult">masz powyżej 18 lat, a dokładnie {age} lat</div>
        }
    }

    ReactDOM.render(
        ifAge(age),
        document.getElementById('app')
    );
});