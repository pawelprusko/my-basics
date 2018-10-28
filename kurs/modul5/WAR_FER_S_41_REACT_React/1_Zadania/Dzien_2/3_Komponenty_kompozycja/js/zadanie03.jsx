import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class Button extends React.Component {
        render() {
            return <button>{this.props.text}</button>
        }
    }

    class Message extends React.Component {
        render() {
            return <div>
            <p>{this.props.messageText}</p>
            <Button text="Tak"/>
            <Button text="Nie"/>
            </div>
        }
    }

    class App extends React.Component {
        render() {
            return <div>
            <Message messageText="Lubisz mnie?"/>
            <Button text="Może"/>
            <Button text="Niekoniecznie"/>
            </div>
        }
    }




    ReactDOM.render(
        <App messageText="Lubisz mnie?"/>,
        document.getElementById('app')
    );
});