import React from 'react';
import ReactDOM from 'react-dom';


class Bulb extends React.Component {
    constructor(){
        super();
        this.state = {
            height: "200px",
            color: "green"
        }
    }
    lightOn = (e) => {
        this.setState({
            color: this.state.color == "green" ? "blue" : "green",
            text: this.state.height == "200px" ? "400px" : "200px"
        })
    }

    render(){
        return ( 
            <div onMouseEnter={this.lightOn} onMouseOut={this.lightOn} style={{width: "500px", height: this.state.height, backgroundColor: this.state.color}}>
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