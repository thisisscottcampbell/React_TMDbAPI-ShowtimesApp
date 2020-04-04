import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
          </ul>
          <Route exact path='/' render={props => <Home />} />
          <Route exact path='/about' render={props => <About />} />
        </div>
      </Router>
      
    )
  }
}

