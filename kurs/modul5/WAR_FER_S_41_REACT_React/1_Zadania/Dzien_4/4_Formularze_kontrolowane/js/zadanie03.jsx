import React from 'react';
import ReactDOM from 'react-dom';

class SelectOrType extends React.Component {
   constructor(props) {
   super(props);

   this.state = {
     selected: '',
     inne: '',
     items: this.props.items
   }

   }

  handleChange = (e) => {
    this.setState({
      selected: e.target.value
    })
  }

  handleInne = (e) => {
    this.setState({
      inne: e.target.value
    })
  }

  handleAddNew = () => {
    this.setState({
      items: [...this.state.items, this.state.inne]
    })
  }

   render(){

    let cars = this.state.items.map((e,i) => {
      return <option key={i}>{e}</option>
    })

     return (
       <div>
         <h1>{this.state.selected}</h1>
         <select onChange={this.handleChange} value={this.state.selected} name="" id="">
            {cars}
            <option>Inne</option>
         </select>
         {
           this.state.selected === "Inne" &&

           <div>
             <input onChange={this.handleInne} value={this.state.inne} type="text" />
             <button onClick={this.handleAddNew}>Dodaj</button>
           </div>
         }
       </div>


     )
   }
 }
document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <SelectOrType items={["bmw", "jaguar", "porshe"]} />,
        document.getElementById('app')
    );
});