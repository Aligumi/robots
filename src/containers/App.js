import React, { Component } from 'react';
// import { robot } from './robot.js';
import CardList from '../components/CardList.js';
import "./App.css";
import SearchBox from '../components/SearchBox.js';
import Scroll from "../components/Scroll.js";
import ErrorBoundary from '../components/ErrorBoundary.js';

class App extends Component  {
  constructor() {
    super()
    this.state = {
      robot: [],
      searchField: ""
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value})
}

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users').then(response => {
    return response.json();
  })
  .then(users => {
    this.setState({ robot: users})
  })
}

  render() {
    const { robot, searchField } = this.state;
    const filteredRobots = robot.filter(robot => {
      return robot.name.toLowerCase()
      .includes(searchField.toLowerCase());
  })
    return !robot.length?
      <h1 className='tc loading'>Loading...</h1> :
      (
        <div className='tc' >
            <h1 className='f1'>RoboHomies</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
              <ErrorBoundary>
                <CardList robot={filteredRobots}/>
              </ErrorBoundary>
            </Scroll>
        </div>
      );

    }
}
 
export default App