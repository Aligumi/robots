import React, { useState, useEffect } from 'react';
// import { robot } from './robot.js';
import CardList from '../components/CardList.js';
import "./App.css";
import SearchBox from '../components/SearchBox.js';
import Scroll from "../components/Scroll.js";
import ErrorBoundary from '../components/ErrorBoundary.js';

function App() {
  

  // constructor() {
  //   super()
  //   this.state = {
  //     robot: [],
  //     searchField: ""
  //   }
  // }
  const [robot, setRobot] = useState([])
  const [searchField, setSearchField] = useState("")

 const onSearchChange = (event) => {
    setSearchField(event.target.value)
}

// componentDidMount() {
//   fetch('https://jsonplaceholder.typicode.com/users').then(response => {
//     return response.json();
//   })
//   .then(users => {
//     this.setState({ robot: users})
//   })
// }
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {return response.json();})
   .then(users => {setRobot(users)});
  }, [robot, searchField])

    const filteredRobots = robot.filter(robot => {
      return robot.name.toLowerCase()
      .includes(searchField.toLowerCase());
  })
    return !robot.length?
      <h1 className='tc loading'>Loading...</h1> :
      (
        <div className='tc' >
            <h1 className='f1'>RoboHomies</h1>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
              <ErrorBoundary>
                <CardList robot={filteredRobots}/>
              </ErrorBoundary>
            </Scroll>
        </div>
      );

    }

 
export default App