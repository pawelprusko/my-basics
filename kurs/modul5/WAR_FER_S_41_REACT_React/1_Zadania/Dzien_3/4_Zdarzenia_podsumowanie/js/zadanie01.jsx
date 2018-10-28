import React from 'react';
import ReactDOM from 'react-dom';


class Bulb extends React.Component {
    constructor(){
        super();
        this.state = {
            text: "ON",
            color: "green"
        }
    }
    lightOn = (e) => {
        this.setState({
            color: this.state.color == "green" ? "yellow" : "green",
            text: this.state.text == "ON" ? "OFF" : "ON"
        })
    }

    render(){
        return (
            <div style={{width: "100px", height: "100px", backgroundColor: this.state.color}}>
            <button onClick={this.lightOn}>{this.state.text}</button>
            </div>
        )
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <Bulb />,
        document.getElementById('app')
    );
});