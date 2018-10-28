import React from 'react';
import ReactDOM from 'react-dom';

class SpeedClickGame extends React.Component {
   constructor(props) {
   super(props);

   this.state = {
     time: this.props.time,
     points: 0,
     disable: false,
   }

   }

  handleClick = (e) => {
    this.setState({
      time: this.props.time - (50 * this.state.points),
    }, () => {
      this.setState({
        points: this.state.points + 1
      })
    })
  }

   render(){
     return (
      <div>
        <button onClick={this.handleClick} disabled={this.state.disable}>ClickMe</button>
        <h1>{this.state.time}</h1>
        <h2>Points: {this.state.points}</h2>
      </div>

     )
   }

   componentDidMount(){
     this.int = setInterval(() => {

      this.setState({
        time: this.state.time - 50
      }, () => {
        if(this.state.time <= 0) {
          clearInterval(this.int);
          this.setState({
            disable: true
          })
        }
      })
    }, 50)
   }
 }

class App extends React.Component {
   constructor() {
   super();

   }
   render(){
     return (

      <SpeedClickGame time={2000}/>

     )
   }
 }


document.addEventListener('DOMContentLoaded', function(){
    //Tutaj umieść kod
    ReactDOM.render(
      <App />,
      document.querySelector('#app')
    )
});