import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

  const num1 = prompt('podaj liczbę A');
  const num2 = prompt('podaj liczbę B');
  const operation = prompt("Operacja matematyczna");




  function getResult(num1, num2, operation){
    let result = 0;
    switch(operation) {
      case "+":
      result = <h1>{Number(num1) + Number(num2)}</h1>;
      break;
      case "-":
      result = <h2>{Number(num1) - Number(num2)}</h2>;
      break;
      case "*":
      result = <h3>{Number(num1) * Number(num2)}</h3>;
      break;
      case "/":
      result = <h4>{Number(num1) / Number(num2)}</h4>;
      break;
      default:
      result = <div>Złe dane</div>;
    }
    return result;
  }




    ReactDOM.render(
        getResult(num1, num2,operation),
        document.getElementById('app')
    );
});