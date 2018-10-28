import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    //Tutaj umieść kod
    class RandomNumbers extends React.Component {
        render(){
            return (
                <div>
                <RandomNumbersInfo min={this.props.min} max={this.props.max} count={this.props.count} />
                <RandomNumbersList min={this.props.min} max={this.props.max} count={this.props.count} />
                </div>
            )
        }
    }
    class RandomNumbersInfo extends React.Component {
        render(){
            return <div style={{width: "300px", border: "1px solid black"}}>
            <h1 style = {{textAlign: "center"}}>Zadane min: {this.props.min}</h1>
            <h1 style = {{textAlign: "center"}}>Zadane min: {this.props.max}</h1>
            <h1 style = {{textAlign: "center"}}>Zadany count: {this.props.count}</h1>
            </div>
        }
    }
    class RandomNumbersList extends React.Component {
        render(){
            let arrayTab = [];
            let random = function(min, max) {   
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }
            for (let i = 1; i<=this.props.count; i++) {
                let randomTab = random(this.props.min, this.props.max);
                arrayTab.push(randomTab);
            }
            return <div>
             <div style={{marginTop: "40px", border: "1px solid red", width: "450px", padding: "10px", textAlign: "center", fontSize: "20px"}}>Wylosowano następujące liczby: {arrayTab.join(" -- ")}</div>
            </div>
        }
    }


    ReactDOM.render(
        <RandomNumbers min={3} max={8} count={4} />,
        document.getElementById("app")
    )
});