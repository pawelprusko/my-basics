import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
  } from 'react-router-dom';

 

  class Home extends React.Component {
    render() {
      return <h1>Witaj na stronie!
        </h1>;
    }
  }

  const Blog = () => (<p>
          Blog, zapraszamy
    </p>)

 const Princing = () => {
     return <p> Nasz cennik </p>
 }

 class NotFound extends React.Component {
    render() {
      return <h1>404,Nothing is here
           <Link to="/">Home</Link>
      </h1>;
    }
  }

  class Navigation extends React.Component {
    render() {
      return <div>
            <h1>Witaj na stronie</h1>
            <ul>
              <li>
                <Link to="/blog">Nasz blog</Link>
              </li>
              <li>
                <Link to="/princing">cennik</Link>
              </li>
            </ul>
      </div>;
    }
  }

  class App extends React.Component {
    render() {
      return <HashRouter>
      <div>
      <Navigation />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route  path='/blog' component={Blog} />
                <Route  path='/princing' component={Princing} />
                <Route component={NotFound} />
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