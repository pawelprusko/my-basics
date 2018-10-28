import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

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
     axios.get("https://api.whatdoestrumpthink.com/api/v1/quotes/random")
    .then((res) => {
       this.setState({
         post: res.data
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