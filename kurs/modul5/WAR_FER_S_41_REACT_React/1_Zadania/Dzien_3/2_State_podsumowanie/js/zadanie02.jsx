import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class StrobeLight extends React.Component {
        constructor() {
            super();

            this.state = {
                backgroundColor: "white",
            }

        }
        render(){
            if(!this.props.onOff) {
                return null
            }
            return (

                <div style={{width:"500px", height:"500px",backgroundColor:this.state.backgroundColor}}>
                </div>

            )
        }
        componentDidMount(){

            this.int = setInterval(()=>{

                this.setState({
                    backgroundColor: this.state.backgroundColor === "white" ? this.props.color : "white"
                })
            },this.props.frequency)
        }

        componentWillUnmount() {

            clearInterval(this.int)

        }
    }

    class StrobeControl extends React.Component {
       constructor() {
       super();

       this.state={
           switch: true,
       }

       }
       render(){
         return (

            <div>
                <StrobeLight frequency="200" color="pink" onOff={this.state.switch}/>
                <StrobeLight frequency="200" color="pink" onOff={this.state.switch}/>
                <StrobeLight frequency="200" color="pink" onOff={this.state.switch}/>
                <StrobeLight frequency="200" color="pink" onOff={this.state.switch}/>
            </div>

         )
       }
        componentDidMount(){

            this.int = setTimeout(()=>{

                this.setState({
                   switch: false,
                })
            },this.props.time)
        }
        componentWillUnmount() {

            clearTimeout(this.int)

        }
     }

     class App extends React.Component {
        constructor() {
        super();

        }
        render(){
          return (

              <StrobeControl time={3000}/>

          )
        }
      }

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});