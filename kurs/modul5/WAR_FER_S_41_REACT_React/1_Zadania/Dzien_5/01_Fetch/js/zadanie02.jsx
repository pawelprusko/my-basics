import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {db} from './firebase';

class BookInfo extends React.Component {
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

      <div>{this.state.post.items[0].volumeInfo.title}</div>

     )
   }


   componentDidMount(){
     axios.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${this.props.isbn}`)
    .then((res) => {
        console.log(res.data)
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
        <BookInfo isbn="0747532699" />,
        document.getElementById('app')
    );
});