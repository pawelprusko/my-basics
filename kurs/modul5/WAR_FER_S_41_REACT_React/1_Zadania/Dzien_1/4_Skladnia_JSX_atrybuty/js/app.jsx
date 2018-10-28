import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    const imageUrl = 'http://www.nice.com/PublishingImages/Career%20images/J---HR_Page-4st-strip-green-hair%20(2).png';
    let color = prompt('Podaj kolor');
    const boxStyles = ["red", "blue", "green"].indexOf(color) != -1 
    ? {border: `1px solid ${color}`, width: "200px", height: "200px"} 
    : {border: `1px solid transparent`, width: "200px", height: "200px"}; 

    
    ReactDOM.render(
        <div>
        <img src={imageUrl}></img>
        <div style = {boxStyles}></div>
        </div>
       ,
        document.getElementById('app')
    );
});