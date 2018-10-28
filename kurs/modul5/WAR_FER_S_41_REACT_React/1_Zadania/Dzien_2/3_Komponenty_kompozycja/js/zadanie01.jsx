import React from 'react';
import ReactDOM from 'react-dom';

const products = [
    {
        title   :   'Mysz komputerowa',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        price: 40,
        image   :   'https://upload.wikimedia.org/wikipedia/commons/c/c5/Red_computer_mouse.jpg'
    },
    {
        title   :   'Klawiatura',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        price: 40,
        image   :   'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Computer_keyboard_Danish_layout.svg/1000px-Computer_keyboard_Danish_layout.svg.png'
    },
    {
        title   :   'Laptop programisty',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        price: 40,
        image   :   'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Typing_computer_screen_reflection.jpg/640px-Typing_computer_screen_reflection.jpg'
    }
]

class ShopItemHeader extends React.Component {
   constructor() {
   super();

   }
   render(){
     return (
       <div>
           <h1>{this.props.title}</h1>
           <img src={this.props.image} />
       </div>

     )
   }
 }

 class ShopItemDescription extends React.Component {
    constructor() {
    super();

    }
    render(){
      return (
        <article>
            <p>{this.props.description}</p>
        </article>

      )
    }
  }

  class ShopItemPricing extends React.Component {
     constructor() {
     super();

     }
     render(){
       return (
         <div>
             Cena: {this.props.price}
             <button>Kup!</button>
         </div>

       )
     }
   }

class ShopItem extends React.Component {
   constructor() {
   super();

   }
   render(){

    let {title, image, description, price} = this.props.details;

     return (
       <div>
          <ShopItemHeader title={title}  image={image}/>
          <ShopItemDescription description={description} />
          <ShopItemPricing price={price} />
       </div>

     )
   }
 }

 class ShopList extends React.Component {
    constructor() {
    super();

    }
    render(){

      let prods = this.props.data.map((e,i) => {
        console.log(e);
        return <ShopItem details={e} />
      })

      return (
        <div>
          {prods}

        </div>

      )
    }
  }


 class App extends React.Component {
    constructor() {
    super();

    }
    render(){
      return (
       <ShopList data={products} />
      )
    }
  }

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});