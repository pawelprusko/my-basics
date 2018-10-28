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

const Papa = (props) => {
    return <h1> papa
      </h1>
}

  class App extends React.Component {
    render() {

        const activeStyle = {
            backgroundColor:'green'
        };
      return <HashRouter>
          <div>
          <NavLink to="/checkage/:age" activeStyle={activeStyle}>CheckAge </NavLink>
          <NavLink to="/ppp" activeStyle={activeStyle}>Papa</NavLink>
            <Switch>
                <Route exact path='/' component={Main} />
                <Route  path='/hello/:name' component={HelloYou} />
                <Route  path='/checkage/:age' component={CheckAge} />
                <Route  path='/ppp' component={Papa} />
            </Switch>
            </div>
        </HashRouter>;
    }
  }

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});