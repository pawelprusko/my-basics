import React from 'react';
import ReactDOM from 'react-dom';

class TexTyper extends React.Component {
    constructor(props){
        super(props);
        let reverse = this.props.reverse ? this.props.text : this.props.text.substring(0,1);
        let counterReverse = this.props.reverse ? this.props.text.length : 1;
        this.state = {
            phrase: reverse,
            counter: counterReverse,
        }
    }
    render(){
        return (
            <h1>{this.state.phrase}</h1>
        )
    }
    componentDidMount(){
        this.int = setInterval(() => {
            if (this.props.reverse){//reverse na true, czyli od końca
                if (this.props.counter<=0) { //czyścimy
                    clearInterval(this.int)
                }
                this.setState({
                    counter: this.state.counter -1
                }, () => {
                    this.setState({
                        phrase: this.props.text.substring(0, this.state.counter)
                    })
                })
            } else { // tutaj reverse false, czyli po staremu, od początku
            if (this.state.counter > this.props.text.length) {
                clearInterval(this.int) //czyścimy jeśli wczyta wszystkie litery
            }
            this.setState({
                counter: this.state.counter +1
            }, () => {
                this.setState({
                    phrase: this.props.text.substring(0, this.state.counter)
                })
            })
        }
        },
         1000)
    }
}



document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <div>
        <TexTyper text="Cokolwiek" reverse={false} />
        <TexTyper text="Cokolwiek" reverse={true} />
        </div>,
        document.getElementById('app')
    );
});