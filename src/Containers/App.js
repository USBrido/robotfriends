import React, { Component } from 'react';
import Cardlist from '../Components/cardlist';
import Searchbar from '../Components/searchBar';
import { robots } from '../robots';
import './App.css'
import Scroll from '../Components/scroll.js'

class App extends Component{
  constructor(){
    super()
    this.state = {
      robots: [],
      searchField: ''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => { return response.json()})
      .then(users => { this.setState({robots: users})})
  }

  onSearchChange = (event) => {
    this.setState({searchField: event.target.value })
  }

  render(){
    const {robots, searchField} = this.state
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
    if (!robots.length) {
      return <h1>Loading...</h1>
    } else { 
      return (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <Searchbar onChange={this.onSearchChange}/>
        <Scroll>
          <Cardlist robots={ filteredRobots }/>
        </Scroll>
      </div>
      )}
   
  }
  
}

export default App;