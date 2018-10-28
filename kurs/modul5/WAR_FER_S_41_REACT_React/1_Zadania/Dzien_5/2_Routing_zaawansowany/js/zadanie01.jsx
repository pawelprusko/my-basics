import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
  } from 'react-router-dom';

 

  class Main extends React.Component {
    render() {
      return <h1>Hello, World!
        </h1>;
    }
  }

  const HelloYou = (props) => {
      return <h1>
          {`Hello ${props.match.params.name}`}
        </h1>
  }

  const CheckAge = (props) => {
    return <h1> Ile masz lat
       {props.match.params.age > 18 ? "Pełnoletni" : "Niepełnoletni"}
      </h1>
}

  class App extends React.Component {
    render() {
      return <HashRouter>
            <Switch>
                <Route exact path='/' component={Main} />
                <Route  path='/hello/:name' component={HelloYou} />
                <Route  path='/checkage/:age' component={CheckAge} />
            </Switch>
        </HashRouter>;
    }
  }

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});