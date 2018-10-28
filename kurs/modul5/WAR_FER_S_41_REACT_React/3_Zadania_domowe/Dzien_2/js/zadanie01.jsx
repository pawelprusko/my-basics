import React from 'react';
import ReactDOM from 'react-dom';


document.addEventListener('DOMContentLoaded', function(){
    //Tutaj umieść kod
    class Colors extends React.Component {
        constructor(){
            super();
            this.state = {color: "green"}
        }
        render(){
            return <div style={{height: "300px", width: "300px", backgroundColor: this.state.color}}></div>
        }
        componentDidMount() {
            this.intervalId = setInterval(() => {
                this.setState({
                  color: this.state.color === "green" ? "red" : "green" // skrócona wersja if this.state.color
                })
              }, 1000)
          }
    }

    ReactDOM.render(
        <Colors />,
        document.getElementById("app")
    )
});