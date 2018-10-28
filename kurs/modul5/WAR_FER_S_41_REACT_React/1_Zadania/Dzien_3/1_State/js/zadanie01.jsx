import React from 'react';
import ReactDOM from 'react-dom';

class TexTyper extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            phrase: this.props.text.substring(0,1),
            counter: 1,
        }
    }
    render(){
        return (
            <h1>{this.state.phrase}</h1>
        )
    }
    componentDidMount(){
        this.int = setInterval(() => {
            this.setState({
                counter: this.state.counter +1
            }, () => {
                this.setState({
                    phrase: this.props.text.substring(0, this.state.counter)
                })
            })
        },
         1000)
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <TexTyper text="Cokolwiek" />,
        document.getElementById('app')
    );
});