import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    //Tutaj umieść kod
    class CardGenerator extends React.Component {
        render(){
            return (
                <div style = {{width: "400px", backgroundColor: "pink", padding: "3px"}}>
                <CardName name="Paweł" />
                <CardSurName surName="Prusko" />
                <CardJob job="programista React" />
                <CardEmail email="pawelp@gmail.com" />
                <CardPhone phone="684-039-303" />
                </div>
            )
        }
    }
    class CardName extends React.Component {
        render() {
            return <h1 style = {{textAlign: "center"}}>{this.props.name}</h1>
        }
    }
    class CardSurName extends React.Component {
        render() {
            return <h2 style = {{textAlign: "center"}}>{this.props.surName}</h2>
        }
    }
    class CardJob extends React.Component {
        render() {
            return <h3 style = {{textAlign: "center"}}>{this.props.job}</h3>
        }
    }
    class CardEmail extends React.Component {
        render() {
            return <a href="mailto:test@example.com" style = {{textAlign: "center", color: "black", display: "block", textDecoration: "none"}}>{this.props.email}</a>
        }
    }
    class CardPhone extends React.Component {
        render() {
            return <a href="693600342" style = {{textAlign: "center", color: "black", display: "block", textDecoration: "none"}}>{this.props.phone}</a>
        }
    }

    ReactDOM.render(
        <CardGenerator />,
        document.getElementById("app")
    )
});