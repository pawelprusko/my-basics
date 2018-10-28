import React from 'react';
import ReactDOM from 'react-dom';

class Sum extends  React.Component {
    render(){//this bo to class jest
        return <h1>Suma to: {this.props.numbers.reduce((p,n)=>Number(p)+Number(n))}</h1>
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <Sum numbers={[2,4,6,8,1]}/>,
        document.getElementById('app')
    );
});