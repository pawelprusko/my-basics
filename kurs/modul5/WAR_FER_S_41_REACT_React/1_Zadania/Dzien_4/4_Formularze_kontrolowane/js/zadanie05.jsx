import React from 'react';
import ReactDOM from 'react-dom';

/**
*
*
*/

class Kebab extends React.Component {
   constructor() {
   super();

   this.state = {
     age: '',
     percentage: '',
     type: '',
     errors: [],
     success: ''
   }

   }

  handlePercentage = (e) => {
    this.setState({
      percentage: e.target.value
    })

  }

  handleAge = (e) => {
    this.setState({
      age: e.target.checked
    })
  }

  handleType = e => {
    this.setState({
      type: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let correct = true;
    let errors = [];

    if(isNaN(Number(this.state.percentage)) || Number(this.state.percentage) == 0 ){
      correct = false;
      errors.push('Jesteś zbyt trzeźwy')
    }

    if(!this.state.age) {
      correct = false;
      errors.push('Musisz być pełnoletni')
    }

    if(!this.state.type) {
      correct = false;
      errors.push('Wybierz kebaba')
    }

    if(!correct) {
      this.setState({
        errors: errors
      })
    } else {
      this.setState({
        success: 'Sukces proszę twój kebab'
      })
    }

  }

   render(){

    let errors = this.state.errors.map((e,i) => {
      return <li key={i}>{e}</li>
    })

     return (
       <form onSubmit={this.handleSubmit} action="">
         <label htmlFor="percentage">Ile masz %</label>
         <input type="text" id="percentage" value={this.state.percentage} onChange={this.handlePercentage}/>
            <br />
          <label htmlFor="age">Jesteś pełnoletni?</label>
         <input type="checkbox" id="age" value={this.state.age} onChange={this.handleAge}/>
         <br />

         <label htmlFor="type">Jaki kebabik???</label>

         <select id="type" value={this.state.type} onChange={this.handleType}>
           <option >Baran ostry</option>
           <option>Kurczak lagodny</option>
           <option>Falafel</option>
         </select>
         <br />

         <button type="submit">Click</button>

         <ul>
           {errors}
         </ul>

         <h2>{this.state.success}</h2>

       </form>
     )
   }
 }

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <Kebab />,
        document.getElementById('app')
    );
});