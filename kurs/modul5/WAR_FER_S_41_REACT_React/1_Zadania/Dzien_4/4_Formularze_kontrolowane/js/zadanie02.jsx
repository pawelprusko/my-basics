import React from 'react';
import ReactDOM from 'react-dom';

class InteractiveDiv extends React.Component {
    constructor() {
        super();
     
        this.state = {
          number: '',
          
        }
        }
        numberChange = (e) => {
            this.setState({
              number: Number(e.target.value)
            })
          }

        render(){
            return (
                <div>
                <input onChange={this.numberChange} type="text" value={this.state.number}/>
                <div style={{height: "100px", backgroundColor: "red", width: this.state.number+"px" }}>
                
                </div>
                </div>
            )
        }
}



document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <InteractiveDiv />,
        document.getElementById('app')
    );
});