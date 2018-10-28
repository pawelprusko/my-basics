import React from 'react';
import ReactDOM from 'react-dom';

class ParentComponent extends React.Component {
   constructor() {
   super();

   }
   render(){
     return (
      <div>
        {this.props.children}
      </div>

     )
   }
 }

 class ChildComponent extends React.Component {
    constructor() {
    super();

    }
    render(){
      return (
       <div>
         {this.props.children}
       </div>

      )
    }
  }

  class GrandchildComponent extends React.Component {
     constructor() {
     super();

     }
     render(){
       return (
        <div>
          {this.props.children}
        </div>

       )
     }
   }

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <ParentComponent>
          <ChildComponent>
            <GrandchildComponent>
              <h1>To działa</h1>
            </GrandchildComponent>
          </ChildComponent>
        </ParentComponent>,
        document.getElementById('app')
    );
});


class Post extends React.Component {
   constructor() {
   super();

   }
   render(){
     return (
      <article>
        {this.props.children}
      </article>

     )
   }
 }

<Post>
  <PostHeader>

  </PostHeader>
  <PostContent>

  </PostContent>
  <PostSidebar>

  </PostSidebar>
</Post>

<Post>
  <PostHeader>

  </PostHeader>
  <PostContent>

  </PostContent>
</Post> 