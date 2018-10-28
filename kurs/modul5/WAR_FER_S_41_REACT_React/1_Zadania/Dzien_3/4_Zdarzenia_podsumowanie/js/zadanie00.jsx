// import React from 'react';
// import ReactDOM from 'react-dom';

// class App extends React.Component {
//    constructor() {
//    super();

//    this.state = {
//      counter: 0
//    }

//    }

//   handleClick = e => {
//     this.setState({
//       counter: this.state.counter + 1
//     })
//   }

//    render(){
//      return (

//       <button onClick={this.handleClick}>Click {this.state.counter}</button>

//      )
//    }
//  }

// document.addEventListener('DOMContentLoaded', function(){
//     ReactDOM.render(
//         <App />,
//         document.getElementById('app')
//     );
// });

import React from 'react';
import ReactDOM from 'react-dom';

class Buttons extends React.Component {
   constructor() {
   super();

   this.state = {
     text: "Klik",
     width: "auto"
   }

   }

  handleFirstClick = (e) => {
    console.log("Kliknięte");
  }

  handleSecondClick = e => {
    this.setState({
      text: "Click!!!!"
    })
  }

  handleThirdClick = e => {
    this.setState({
      width: "300px"
    })
  }


   render(){
     return (
      <div>
        <button onClick={this.handleFirstClick}>{this.state.text}</button>
        <button onClick={this.handleSecondClick}>{this.state.text}</button>
        <button onClick={this.handleThirdClick} style={{width: this.state.width}}>{this.state.text}</button>
      </div>

     )
   }
 }

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <Buttons />,
        document.getElementById('app')
    );
});