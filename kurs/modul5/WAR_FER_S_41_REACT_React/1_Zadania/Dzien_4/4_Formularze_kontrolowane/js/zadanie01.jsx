import React from 'react';
import ReactDOM from 'react-dom';

class AddTwoNumbers extends React.Component {
   constructor() {
   super();

   this.state = {
     number1: '',
     number2:''
   }
   }

    numberChange1 = (e) => {
    this.setState({
      number1: e.target.value
    })
  }
  numberChange2 = (e) => {
    this.setState({
      number2: e.target.value
    })
  }

   render(){
     return (
      <div>
      <input onChange={this.numberChange1} type="text" value={this.state.number1} />
      <input onChange={this.numberChange2} type="text" value={this.state.number2}/>
      <h1>
      {
        (isNaN(Number(this.state.number1))) || (isNaN(Number(this.state.number2))) ? "Złe dane" :
        (Number(this.state.number1)+Number(this.state.number2))}
        </h1>
        </div>
      
      

      
      
     )
   }
 }




document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <AddTwoNumbers/>,
        document.getElementById('app')
    );
});