import React from 'react';
import ReactDOM from 'react-dom';



class CrazyDiv extends React.Component {
    constructor(){
        super();
        
        this.state = {
            top: "auto",
            left: "auto"
            
        }
}
    lightOn = (e) => {
        let random = function(min, max) {  
            return Math.floor(Math.random() * (max - min + 1)) + min
        }
        this.setState({
            top: random(0, 1000)+"px",
            left: random(0, 1000)+"px"
        })
    }

    render(){
        return ( 
            <div onMouseEnter={this.lightOn} style={{width: "100px", height: "50px", backgroundColor: "red", position: "absolute", top: this.state.top, left: this.state.left }}>
            </div>
        )
    }

}
document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <CrazyDiv />,
        document.getElementById('app')
    );
});