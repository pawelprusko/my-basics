import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
   constructor() {
     super();

     this.state = {
       counter: 1
     }

     this.handleClick = this.handleClick.bind(this);

   }

    handleClick(e) {
      console.log(this, e);
      this.setState({
        counter: this.state.counter + 1
      })

    }

    handleSuper(e) {
      console.log(this, e);
      this.setState({
        counter: this.state.counter - 1
      })
    }

   render(){
     return (
       <div>

         <button onClick={this.handleClick}>Click</button>
         <button onClick={e => this.handleSuper(e)}>Click</button>
         <h1>{this.state.counter}</h1>

       </div>
     )
   }
 }

 class Buton extends React.Component {
     constructor(){
         super();
         this.state = {
            counter: 1
          } 
        }
          handleSuper(e) {
            console.log(this, e);
            this.setState({
              counter: this.state.counter - 1
            })
        }
     
     render(){
        return (
          <div>
   
            
            <button onMouseEnter={e => this.handleSuper(e)} onMouseOut={e => this.handleSuper(e)}>Move</button>
            <button onMouseOut={e => this.handleSuper(e)}>Out</button>
            <h1>{this.state.counter}</h1>
   
          </div>
        )
      }

 }


document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <Buton />,
        document.getElementById('app')
    );
});


