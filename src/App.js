import React, { Component } from 'react';
import Cardlist from './cardlist';
import Searchbar from './searchBar';
import { robots } from './robots';

class App extends Component{
  constructor(){
    super()
    this.state = {
      robots: robots,
      searchField: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({searchField: event.target.value })
  }

  render(){
    const filteredRobots = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })
    return (
      <div className='tc'>
        <h1>RoboFriends</h1>
        <Searchbar onChange={this.onSearchChange}/>
        <Cardlist robots={ filteredRobots }/>
      </div>
      )
  }
  
}

export default App;