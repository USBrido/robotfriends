import React, { Component } from 'react';
import Cardlist from './cardlist';
import Searchbar from './searchBar';
import { robots } from './robots';
import './App.css'

class App extends Component{
  constructor(){
    super()
    this.state = {
      robots: robots,
      searchField: ''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response =>{
        response.json();
      })
      .then(users =>{
        this.setState({robots: robots})
      })
    
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
        <h1 className='f1'>RoboFriends</h1>
        <Searchbar onChange={this.onSearchChange}/>
        <Cardlist robots={ filteredRobots }/>
      </div>
      )
  }
  
}

export default App;