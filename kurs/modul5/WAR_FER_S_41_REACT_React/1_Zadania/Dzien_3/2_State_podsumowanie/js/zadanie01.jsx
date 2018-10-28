import React from 'react';
import ReactDOM from 'react-dom';

class ClockTimeHour extends React.Component {
    constructor() {
    super();

    }
    render(){
      return (

         <span>{this.props.time.getHours()}: </span>

      )
    }
  }

  class ClockTimeMinute extends React.Component {
    constructor() {
    super();

    }
    render(){
      return (

         <span>{this.props.time.getMinutes()}: </span>

      )
    }
  }

  class ClockTimeSecond extends React.Component {
    constructor() {
    super();

    }
    render(){
      return (

         <span>{this.props.time.getSeconds()}</span>

      )
    }
  }

class Clock extends React.Component {
    constructor(props) {
    super(props);
 
    this.state = {
      date: new Date()
    }
 
    }
    render(){
      return (
        <div>
 
          <ClockTimeHour time={this.state.date} />
          <ClockTimeMinute time={this.state.date} />
          <ClockTimeSecond time={this.state.date} />
          
        </div>
      )
    }
   componentDidMount() {
     this.int = setInterval(() => {
       this.setState({
         date: new Date()
       })
     }, 1000)
   }
 
  }

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <Clock />,
        document.getElementById('app')
    );
});


//////////////////////////////////////////////////////////////////////////////////
// SPOSÓB MARCINA
// import React from 'react';
// import ReactDOM from 'react-dom';

// class ClockHour extends React.Component {
//    constructor() {
//    super();

//    }
//    render(){
//      return (

//         <li>{this.props.time.getHours()}</li>

//      )
//    }
//  }

//  class ClockMinut extends React.Component {
//     constructor() {
//     super();

//     }
//     render(){
//       return (

//          <li>{this.props.time.getMinutes()}</li>

//       )
//     }
//   }

//   class ClockSecond extends React.Component {
//      constructor() {
//      super();

//      }
//      render(){
//        return (

//           <li>{this.props.time.getSeconds()}</li>

//        )
//      }
//    }


// class ClockDate extends React.Component {
//    constructor() {
//    super();

//    }
//    render(){
//      return (

//         <h1>{this.props.date.toLocaleDateString()}</h1>

//      )
//    }
//  }

//  class ClockTime extends React.Component {
//     constructor(props) {
//     super(props);

//     }
//     render(){
//       return (

//          <ul>
//            <ClockHour time={this.props.time} />
//            <ClockMinut time={this.props.time} />
//            <ClockSecond time={this.props.time} />
//          </ul>

//       )
//     }
//   }

// class Clock extends React.Component {
//    constructor() {
//    super();

//    this.state = {
//      date: new Date()
//    }

//    }
//    render(){
//      return (
//        <div>

//          <ClockDate date={this.state.date} />
//          <ClockTime time={this.state.date} />
//        </div>


//      )
//    }

//   componentDidMount() {
//     this.int = setInterval(() => {
//       this.setState({
//         date: new Date()
//       })
//     }, 1000)
//   }

//  }

// document.addEventListener('DOMContentLoaded', function(){
//     ReactDOM.render(
//         <Clock />,
//         document.getElementById('app')
//     );
// });