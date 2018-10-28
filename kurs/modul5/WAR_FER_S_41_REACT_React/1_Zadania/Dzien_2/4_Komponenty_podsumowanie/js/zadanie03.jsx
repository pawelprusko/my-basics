import React from 'react';
import ReactDOM from 'react-dom';
import items from './zadanie02';
import _ from 'lodash';

document.addEventListener('DOMContentLoaded', function () {

    class Receipt extends React.Component {

        render() {


            return (
                <table>
                    <thead>
                    <ReceiptHeader/>
                    </thead>
                    <ReceiptItems data={this.props.data}/>
                   <ReceiptFooter data={this.props.data}/>
                </table>
            )
        }
    }

    class ReceiptHeader extends React.Component {
        render() {
            return (
                <tr>
                    <th>Nazwa</th>
                    <th>Cena</th>
                    <th>Ilość</th>
                    <th>Łączna cena</th>
                </tr>
            )
        }
    }

    class ReceiptItems extends React.Component {
        constructor() {
            super();

        }

        render() {
            let result = this.props.data.map((element) => {
                return <ReceiptItem data={element}/>
            });
            return (
                <tbody>
                {result}
                </tbody>
            )
        }
    }

    class ReceiptItem extends React.Component {
        constructor() {
            super();

        }

        render() {
            return (
                <tr>
                    <td>{this.props.data.name}</td>
                    <td>{this.props.data.price}</td>
                    <td>{this.props.data.count}</td>
                    <td>{this.props.data.count * this.props.data.price}</td>
                </tr>
            )
        }
    }

    class ReceiptFooter extends React.Component {
       constructor() {
       super();

       }
       render(){
           let total =0;
           this.props.data.forEach((element)=>{
              total += element.price * element.count;
           });
         return (
             <tr>
                 <td colSpan="3">Razem</td>
                 <td>{total}</td>
             </tr>
         )
       }
     }

    ReactDOM.render(
        <Receipt data={items}/>,
        document.getElementById('app')
    );
});