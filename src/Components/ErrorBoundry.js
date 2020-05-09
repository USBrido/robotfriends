import React, { Component } from 'react'

class ErrorBoundry extends Component {
  constructor(props) {
    super();
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(error, info){
    this.setState({hasErrot: true})
  }

  render(){
    if (this.state.hasError) {
      return <h1> Ooops that's not good</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundry