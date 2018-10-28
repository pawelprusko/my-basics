// import React from 'react';
// import ReactDOM from 'react-dom';

// class Hello extends React.Component {
//    constructor() {
//      super();

//      this.state = {
//        text: "Hello World"
//      }

//    }
//    render(){
//      return (

//       <h1>{this.state.text}</h1>

//      )
//    }

//    componentDidMount(){
//      this.int = setTimeout(() => {
//        this.setState({
//          text: "Suprise"
//        })
//      }, 5000)
//    }

//    componentWillUnmount(){
//      clearTimeout(this.int)
//    }
//  }

// document.addEventListener('DOMContentLoaded', function(){
//     ReactDOM.render(
//         <Hello />,
//         document.getElementById('app')
//     );
// });

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