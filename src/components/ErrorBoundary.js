import React, { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = {
        hasErorr: false,
    }
  }

  componentDidCatch(error, info) {
    this.setState({hasErorr: true })
  }

  render() {
    if(this.state.hasErorr) {
        return <h1>Opps an erorr occured</h1>
    } 
      return this.props.children
    }
  }

export default ErrorBoundary