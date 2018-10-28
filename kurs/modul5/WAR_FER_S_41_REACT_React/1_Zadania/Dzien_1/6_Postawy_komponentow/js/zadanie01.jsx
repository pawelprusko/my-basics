import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
const LikeBox = () => {
    let counter = 0;
    return <div>
    <div>{counter} Likes</div>
    <button>Press</button>

    
    </div>
}

    ReactDOM.render(
        <LikeBox />,
        document.getElementById('app')
    );
});