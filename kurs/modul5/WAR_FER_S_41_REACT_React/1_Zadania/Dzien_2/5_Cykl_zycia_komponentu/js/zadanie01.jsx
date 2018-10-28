import React from 'react';
import ReactDOM from 'react-dom';

class LifeCyclesTester extends React.Component {
  constructor() {
    super();

    console.log("Jestem konstruktor");
    this.state = {
      date: new Date().toLocaleTimeString()
    }

  }

  componentWillMount() {
    console.log("JEstem componentWillMount");
  }
  render() {

    console.log("Jestem Render");
    return (<h1>LifeCyclesTester {this.state.date}</h1>)
  }

  componentDidMount() {
    console.log("Jestem Did mount");
    this.intervalId = setInterval(() => {
      this.setState({
        date: new Date().toLocaleTimeString()
      })
    }, 1000)
  }
  componentWillUnmount(){
    clearInterval(this.intervalId);
  }

  componentWillUnmount() {
    console.log("Kres zycia mego nastał");

  }
}

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      render: true
    }

  }
  render() {
    return this.state.render ? <LifeCyclesTester /> : null;
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        render: false
      })
    }, 20000)
  }
}

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(<App />, document.getElementById('app'));
});