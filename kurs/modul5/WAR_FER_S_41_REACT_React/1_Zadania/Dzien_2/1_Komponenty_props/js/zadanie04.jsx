import React from 'react';
import ReactDOM from 'react-dom';

const menu = [
    {
        urL     :   '/',
        text    :   'Strona główna'
    },
    {
        urL     :   '/blog',
        text    :   'Blog'
    },
    {
        urL     :   '/pricing',
        text    :   'Cennik'
    },
    {
        urL     :   '/contact',
        text    :   'Kontakt'
    }
];


class Menu extends React.Component {
  render(){

    let elements = this.props.menu.map((e,i) => {
      return <li><a href={e.urL}>{e.text}</a></li>
    })

    return <ul>
      {elements}
    </ul>
  }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <Menu menu={menu} />,
        document.getElementById('app')
    );
});

