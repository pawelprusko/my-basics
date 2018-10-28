import React from 'react';
import ReactDOM from 'react-dom';


class ButtonCounter extends React.Component {
   constructor() {
   super();

   this.state = {
     count: 0
   }

   }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

   render(){
     return (
      <div>
        <h1>{this.state.count}</h1>
        <ButtonToClick goClick={this.handleClick} />
        <ButtonToClick goClick={this.handleClick} />
      </div>

     )
   }
 }

 class ButtonToClick extends React.Component {
    constructor() {
    super();

    }

    passInfo = () => {
      if(typeof this.props.goClick === 'function') {
        this.props.goClick()
      }
    }

    render(){
      return (
       <button onClick={this.passInfo}>
         Click
       </button>

      )
    }
  }

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <ButtonCounter />,
        document.getElementById('app')
    );
});