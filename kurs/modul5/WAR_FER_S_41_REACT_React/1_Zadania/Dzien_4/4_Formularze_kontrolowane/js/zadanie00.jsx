import React from 'react';
import ReactDOM from 'react-dom';

class HelloName extends React.Component {
   constructor() {
   super();

   this.state = {
     name: 'Ty'
   }

   }

  handleInputChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

   render(){
     return (
      <form action="">
        <h1>Hello {this.state.name}</h1>
        <input onChange={this.handleInputChange} type="text" value={this.state.name}/>
      </form>

     )
   }
 }

class TextField extends React.Component {
   constructor() {
   super();

   this.state = {
     team: ''
   }

   }

  handleSelect = (e) => {
    this.setState({
      team: e.target.value
    })
  }


   render(){
     return (

       <div>
         <select
           value={this.state.team}
           name=""
           id=""
          onChange={this.handleSelect}
           >
           <option >Legia</option>
           <option >Widzew</option>
           <option >Jaga</option>
           <option >Atletico Madrid</option>
         </select>
         <h1>{this.state.team}</h1>
         <h2>{this.state.team.length}</h2>

       </div>


     )
   }
 }



document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <TextField />,
        document.getElementById('app')
    );
});