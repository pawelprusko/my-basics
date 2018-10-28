import React from 'react';
import ReactDOM from 'react-dom';

class TrafficLights extends React.Component {
   constructor() {
   super();

   this.state = {
     light: 0
   }

   }
   render(){
     return (
       <section className="lights">
         <div className="light" style={{
           width: "100px",
           height: "100px",
           borderRadius: "50%",
           backgroundColor: (this.state.light === 0 || this.state.light === 1) ? "red" : "black"

         }}></div>
         <div className="light" style={{
           width: "100px",
           height: "100px",
           borderRadius: "50%",
           backgroundColor: (this.state.light === 3 || this.state.light === 1) ? "yellow" : "black"
         }}></div>
         <div className="light" style={{
           width: "100px",
           height: "100px",
           borderRadius: "50%",
           backgroundColor: this.state.light === 2 ? "green" : "black"
         }}></div>
       </section>


     )
   }

  componentDidMount(){
    this.int = setInterval(() => {
      // this.setState({
      //   light: (this.state.light + 1) % 4
      // })

        this.setState({
           light: 0
        })

        this.stageTwo = setTimeout(() => {
          this.setState({
             light: 1
          })
        }, this.props.redTime * 1000)

        this.stageThree = setTimeout(() => {
          this.setState({
             light: 2
          })
        }, (this.props.redTime + this.props.yellowTime) * 1000)

        this.stageFour = setTimeout(() => {
          this.setState({
             light: 3
          })
        }, (this.props.redTime + this.props.yellowTime + this.props.greenTime) * 1000)


    }, (this.props.redTime + this.props.greenTime + this.props.yellowTime + this.props.yellowTime) * 1000)
  }

 }


class App extends React.Component {
   constructor() {
   super();

   }
   render(){
     return (

      <TrafficLights redTime={2} yellowTime={1} greenTime={2} />

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