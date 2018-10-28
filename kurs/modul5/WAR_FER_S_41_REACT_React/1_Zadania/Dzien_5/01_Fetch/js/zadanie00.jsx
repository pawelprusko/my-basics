import React from 'react';
import ReactDOM from 'react-dom';

class Gala extends React.Component {
   constructor() {
   super();

   this.state = {
     post: ''
   }

   }
   render(){

      if(!this.state.post) {
        return <p>Loading ...</p>
      }


     return (

      <div>{this.state.post.message}</div>

     )
   }


   componentDidMount(){
     fetch("https://api.whatdoestrumpthink.com/api/v1/quotes/random")
     .then((res) => {
       console.log(res);
       return res.json()
     }).then((res) => {
       this.setState({
         post: res
       })
     }).catch((error) => {
       console.log(error);
     })
   }
 }

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <Gala />,
        document.getElementById('app')
    );
});