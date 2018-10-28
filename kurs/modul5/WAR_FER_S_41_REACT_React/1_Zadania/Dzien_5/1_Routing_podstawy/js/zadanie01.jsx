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

  const AboutUs = () => (<p>
          Trochę więcej o nas...
    </p>)

 const AboutCompany = () => {
     return <p> cos tam o firmie ... </p>
 }

 const About = () => {
    return <div> <h1>cos tam o firmie ... </h1>
        <Link to="/about/us" > onas onas </Link>

        <Route  path='/about/us' component={AboutUs} />

    </div>
}



  class App extends React.Component {
    render() {
      return <HashRouter>
            <Switch>
                <Route exact path='/' component={Main} />
                <Route  path='/about' component={About} />
                <Route  path='/about/company' component={AboutCompany} />
               
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