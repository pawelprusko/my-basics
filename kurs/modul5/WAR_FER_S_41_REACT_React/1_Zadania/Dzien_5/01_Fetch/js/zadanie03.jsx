import React from 'react';
import ReactDOM from 'react-dom';
import {db} from './firebase';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      students: []
    }

  }

  handleClick = () => {

    let post = {
      name: this.name.value
    }

    this.setState({
      students: [
        ...this.state.students,
        post
      ]
    })

    db.collection('students').add(post);
  }

  render() {

    if (!this.state.students.length) {
      return null;
    }

    let students = this.state.students.map((e) => {
      return <li>{e.name}</li>
    })

    return (<div>
      <input ref={e => this.name = e} type="text"/>
      <button onClick={this.handleClick}>Add</button>
      <ul>
        {students}
      </ul>
    </div>)
  }

  componentDidMount() {
    db.collection('students').get().then((snap) => {
      console.log(snap.docs);

      snap.docs.forEach((e) => {
        console.log(e.data());
        this.setState({
          students: [
            ...this.state.students,
            e.data()
          ]
        })

      })

    });
  }
}

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(<App/>, document.getElementById('app'));
});