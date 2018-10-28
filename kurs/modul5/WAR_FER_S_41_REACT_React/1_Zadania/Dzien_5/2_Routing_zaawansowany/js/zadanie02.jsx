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
      return <h1>Witamy w naszym sklepie!
        </h1>;
    }
  }
  class NotFound extends React.Component {
    render() {
      return <h1>404,Nothing is here
           <Link to="/">Home</Link>
      </h1>;
    }
  }

  const Services = (props) => {
    if (props.match.params.service === "www") {
return <h1> Proponujemy usługę {props.match.params.service}</h1>

    } else if (props.match.params.service === "seo") {
        return <h1> Proponujemy usługę {props.match.params.service}</h1>
            } else if (props.match.params.service === "shop") {
                return <h1> Proponujemy usługę {props.match.params.service}</h1>
                    } else {
        return <NotFound /> // powinno być turnery operation
    }
}
      


  class App extends React.Component {
    render() {
      return <HashRouter>
            <Switch>
                <Route exact path='/' component={Main} />
                <Route  path='/services/:service' component={Services} />
                <Route component={NotFound} />
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