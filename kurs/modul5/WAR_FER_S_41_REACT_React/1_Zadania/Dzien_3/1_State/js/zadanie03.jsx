import React from 'react';
import ReactDOM from 'react-dom';

class StrobeLight extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            color: "green", 
            counter: 0
        }
    }
    render() {
        if(this.props.onOff) {
            return null
        }
        return (
            <div style={{backgroundColor: this.state.color, width: "500px", height: "50px"}}></div>
        )
    }
    componentDidMount(){
        this.intervalId = setInterval(()=>{
            this.setState({
                counter: (this.state.counter + 1) % 6
            }, () => {
                this.setState({
                    color: ["red", "orange", "yellow", "green", "blue", "purple"][this.state.counter]
                })
            })
        },this.props.time)
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <StrobeLight color="red" time={2000} onOff={false}/>,  //propsy - stringi,wąsy"", cokolwiek innego, wąsy {}
        document.getElementById('app')
    );
});