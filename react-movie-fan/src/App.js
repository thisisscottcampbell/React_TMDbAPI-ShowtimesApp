import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Home from './Components/Home';
import Movie from './Components/Movie';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={Home} />
          <Route exact path='/movie/:movieId' component={Movie} />
        </div>
      </Router>
      
    )
  }
}

