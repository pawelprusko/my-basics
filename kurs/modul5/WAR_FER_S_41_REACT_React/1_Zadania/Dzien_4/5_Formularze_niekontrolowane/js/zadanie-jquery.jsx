//wcześniej yarn add --dev jquery

import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
   constructor() {
   super();

   this.state = {
     color: "yellow"
   }

   }
   render(){
     return (
      <div ref={element => this.box = element} style={{
        width: "100px",
        height: "100px",
        backgroundColor: this.state.color,
        position: "absolute"
      }}>

      </div>

     )
   }

   componentDidMount(){
     this.box.style.backgroundColor = "pink";

     $(this.box).animate({
       left: 300
     }, 3000)
   }
 }

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});