import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

class ShowItem extends React.Component {
    render() {
        return <div>
        <div>
            <h1>{this.props.title}</h1>
            <img src={this.props.image} /> //musi być zamknięty
        </div>
        <article>
            <p>{this.props.description}</p>
        </article>
        <div>
            Cena: {this.props.price}
            <button>Kup!</button>
        </div>
    </div>
    }
}

    ReactDOM.render(
        <ShowItem title="Bułka" description="Smaczna" image={} price="1zł" />,
        document.getElementById('app')
    );
});