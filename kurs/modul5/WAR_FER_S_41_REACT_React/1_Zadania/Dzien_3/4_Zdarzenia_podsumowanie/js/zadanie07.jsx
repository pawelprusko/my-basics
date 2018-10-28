
import React from 'react';
import ReactDOM from 'react-dom';

const Jaga = [
  "Krzysztof",
  "Magda",
  "Alicja",
  "Ania",
  "Szymon",
  "Paweł",
  "Artur",
  "Radek",
  "Ola",
  "Miłosz",
  "Tomek",
  "Łukasz",
  "Konrad",
  "Marcin"
];

class Team extends React.Component {
   constructor(props) {
     
   super(props);

   this.state = {
     forwards: [],
     midfielders: [],
     defenders: [],
     goalkeeper: [],
     squad: this.props.squad
   }

   }

  handleForward = (e) => {
    let move = e.target.parentElement.firstElementChild.innerText
    this.setState({
      squad: this.state.squad.filter((val) => val !== move),
      forwards: [...this.state.forwards, move]
    })
  }

  handleMidfielders = (e) => {
    let move = e.target.parentElement.firstElementChild.innerText
    this.setState({
      squad: this.state.squad.filter((val) => val !== move),
      midfielders: [...this.state.midfielders, move]
    })
  }

  handleDefenders = (e) => {
    let move = e.target.parentElement.firstElementChild.innerText
    this.setState({
      squad: this.state.squad.filter((val) => val !== move),
      defenders: [...this.state.defenders, move]
    })
  }
  handleKeeper = (e) => {
    let move = e.target.parentElement.firstElementChild.innerText
    this.setState({
      squad: this.state.squad.filter((val) => val !== move),
      goalkeeper: [...this.state.goalkeeper, move]
    })
  }

   render(){

    let squad = this.state.squad.map((e,i) => {
      return <li key={i}><span>{e}</span><br />
      <button onClick={this.handleForward}>Napastnicy</button>
      <button onClick={this.handleMidfielders}>Pomocnicy</button>
      <button onClick={this.handleDefenders}>Obrona</button>
      <button onClick={this.handleKeeper}>Bramkarz</button>


      </li>
    });

    let forwards = this.state.forwards.map((e) => {
      return <p>{e}</p>
    })
    let midfielders = this.state.midfielders.map((e) => {
      return <p>{e}</p>
    })
    let defenders = this.state.defenders.map((e) => {
      return <p>{e}</p>
    })
    let goalkeeper = this.state.goalkeeper.map((e) => {
      return <p>{e}</p>
    })


     return (
       <div>
         <h1>Selekcja</h1>
         <ul className="squad">
            {squad}
         </ul>
         <section>
           <h1>Napastnicy</h1>
           {forwards}
         </section>
         <section>
           <h1>Pomocnicy</h1>
           {midfielders}
         </section>
         <section>
           <h1>Obrona</h1>
           {defenders}
         </section>
         <section>
           <h1>Bramkarz</h1>
           {goalkeeper}
           
         </section>
       </div>


     )
   }
 }


class App extends React.Component {
   constructor() {
   super();

   }
   render(){
     return (

      <Team squad={Jaga} />

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