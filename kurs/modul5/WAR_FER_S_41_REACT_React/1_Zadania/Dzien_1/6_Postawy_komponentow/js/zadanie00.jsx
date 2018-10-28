import React from 'react';
import ReactDOM from 'react-dom';
const Search = () => {
    return <form>
        <input type="search"/>
        <button>Wyszukaj</button>
    </form>
}
class SearchBox extends React.Component {
    render(){
        return (
        <form>
            <input type="search"/>
            <button>Wyszukaj</button>
        </form>
        )
    }
}

class App extends React.Component {
    render(){
        return <div>
        <Search />
        <SearchBox />
        </div>
    }
}
document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});