import React from 'react';
import ReactDOM from 'react-dom';

class MobileMenu extends React.Component {
    constructor() {
    super();
    this.state ={
        display: "none",
        display2: "block",
    }

    this.change= this.change.bind(this);
 
    }

    change(){
        this.setState({
            display: this.state.display === "block" ? "none" : "block",      
            display2: this.state.display2 === "none" ? "block" : "none"    
        })
    }

    render(){
      return (
        <menu>
                <div style={{display: this.state.display2}} onMouseEnter={this.change}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg" alt="Otwórz menu"/>
                </div>
                <div style={{display: this.state.display}}>
                    <ul>
                        <li>Menu 1...</li>
                        <li>Menu 2...</li>
                        <li>Menu 3...</li>
                        <li>Menu 4...</li>
                    </ul>
                    <div onMouseEnter={this.change} style={{display: this.state.display}}>Schowaj menu</div>
                </div>
        </menu>
  
      )
    }
  }


document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <MobileMenu/>,
        document.getElementById('app')
    );
});