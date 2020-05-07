import React, { Component } from 'react';
import Cardlist from './cardlist';
import { robots } from './robots';
import Searchbar from './searchBar';

class App extends Component{
  constructor(){
    super()
    this.state = {
      robots: robots,
      searchField:''
    }
  }

  onSearchChange(event){
    console.log(event.target.value);
  }

  render(){
    return (
      <div className='tc'>
        <h1>RoboFriends</h1>
        <Searchbar searchChange={this.onSearchChange}/>
        <Cardlist robots={ this.state.robots }/>
      </div>
      )
  }
  
}

export default App;