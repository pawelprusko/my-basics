import React from 'react';
import ReactDOM from 'react-dom';
require('../css/style.css');

document.addEventListener('DOMContentLoaded', function(){

    class CHatHeader extends React.Component {
        constructor() {
            super();
        }
        render() {
            return <header>
            <h1>Chat prywatny</h1>
        </header>
        }
    }

    class CHatMessage extends React.Component {
        constructor() {
            super();
        }
        render() {
            return <li>Wpis z chatu {this.props.number}</li>
        }
    }

    class CHatMessages extends React.Component {
        constructor() {
            super();
        }
        render() {
            return <div>
            <ul>
                <CHatMessage number="1" />
                <CHatMessage number="2" />
                <CHatMessage number="3" />
            </ul>
        </div>
        }
    }

    class NewCHatMessages extends React.Component {
        constructor() {
            super();
        }
        render() {
            return <footer>
            <input type="text"/>
            <button>Wyślij</button>
        </footer>
        }
    }


    class Chat extends React.Component{
        render() {
        return <div className="chat">
            <CHatHeader />
            <CHatMessages />
            <NewCHatMessages />
        </div>
    }
    }

    class App extends React.Component{
        render() {
         return <div>
             <Chat />
         </div>
        }
     }

    // class Chat extends React.Component{
    //     render(){
    //         return <div className="chat">
    //             <header>
    //                 <h1>Chat prywatny</h1>
    //             </header>
    //             <div>
    //                 <ul>
    //                     <li>Wpis z chatu 1</li>
    //                     <li>Wpis z chatu 2</li>
    //                     <li>Wpis z chatu 3</li>
    //                 </ul>
    //             </div>
    //             <footer>
    //                 <input type="text"/>
    //                 <button>Wyślij</button>
    //             </footer>
    //         </div>
    //     }
    // }
    //
    // class App extends React.Component{
    //     render(){
    //         return <div>
    //             <Chat />
    //         </div>;
    //     }
    // }

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});