import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

//const items = require('./zadanie02');
import rec from './zadanie02';

class Receipt extends React.Component {
   constructor() {
   super();

   }
   render(){

     let total = 0;

     // _.forEach(this.props.items, (x) => {
     //   return total += x.price * x.count
     // });

     this.props.items.forEach((x) => {
       return total += x.price * x.count
     })

    const row = this.props.items.map((element,i) => {
      return (
        <tr>
          <td>{element.name}</td>
          <td>{element.price}</td>
          <td>{element.count}</td>
          <td>{element.count * element.price}</td>
        </tr>
      )
    })

     return (
       <table>
         <tr>
           <th>Nazwa</th>
           <th>Cena / 1</th>
           <th>Ilość</th>
           <th>Total</th>
         </tr>
         {row}
         <tr>
           <td colSpan={3}>Razem</td>
           <td>{total}</td>
         </tr>

       </table>
     )
   }
 }

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <Receipt items={rec} />,
        document.getElementById('app')
    );
});