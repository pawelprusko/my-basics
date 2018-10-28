import React from 'react';
import ReactDOM from 'react-dom';


class ClockDate extends React.Component {
   constructor() {
   super();

   }
   render(){
     return (

        <h1>{this.props.date.toLocaleDateString()}</h1>
     )
   }
 }

 class ClockTime extends React.Component {
    constructor() {
    super();

    }
    render(){
      return (

         <h1>{this.props.time.toLocaleTimeString()}</h1>
      )
    }
  }

class Clock extends React.Component {
   constructor() {
   super();

   this.state = {
     date: new Date()
   }

   }
   render(){
     return (
       <div>

         <ClockDate date={this.state.date} />
         <ClockTime time={this.state.date} />
       </div>


     )
   }

  componentDidMount() {
    this.int = setInterval(() => {
      this.setState({
        date: new Date()
      })
    }, 1000)
  }

 }

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <Clock />,
        document.getElementById('app')
    );
});