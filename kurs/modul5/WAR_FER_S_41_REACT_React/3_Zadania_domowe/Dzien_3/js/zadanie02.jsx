import React from 'react';
import ReactDOM from 'react-dom';
document.addEventListener('DOMContentLoaded', function(){
    //Tutaj umieść kod
    class AnotherColor extends React.Component {
        constructor(){
            super();
            this.state = {
                color: "yellow"
            }
        }
        render(){
            return  console.log("render"),
            <div style={{width: "200px", height: "200px", backgroundColor: this.state.color}}></div>
            
            
        }
        componentDidMount(){
            
            let interval = setInterval(()=>{
                this.setState({
                    color: "blue"
                }),
                console.log("DidMount")
            },5000)
            
        }
    }

    class App extends React.Component {
        render(){
            return <AnotherColor />
        }
    }


    ReactDOM.render(
        <App />,
        document.getElementById("app")
    )
});