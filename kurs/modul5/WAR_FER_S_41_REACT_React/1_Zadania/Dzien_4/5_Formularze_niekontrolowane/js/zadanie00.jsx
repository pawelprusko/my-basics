import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


class GivePassword extends React.Component {
   constructor() {
   super();

   this.state = {
     loggedIn: false
   }

   }

  handleClick = () => {
    if(this.props.pwd == this.input.value) {
      this.setState({
        loggedIn: true
      })
    }
  }

   render(){
     if(!this.state.loggedIn) {
       return <div>
         <input ref={x => this.input = x} type="text" />
         <button onClick={this.handleClick} >Loggin</button>
       </div>
     } else {
       return (
         <h1>Logged In</h1>
       )
     }
   }
 }

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

      <GivePassword pwd={1234} />

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