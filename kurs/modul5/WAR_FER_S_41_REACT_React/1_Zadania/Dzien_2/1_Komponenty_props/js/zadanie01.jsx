import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
class AddNumbers extends React.Component {
    render(){
    return <h1>Suma liczb: {this.props.number1+this.props.number2}</h1>
}
}

    ReactDOM.render(
        <AddNumbers number1={3} number2={4} />,
        document.getElementById('app')
    );
});