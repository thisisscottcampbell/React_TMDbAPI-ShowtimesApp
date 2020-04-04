import React, { Component } from 'react';
import axios from 'axios';
import config from '../config'

export default class Home extends Component {

  state = { 
    movies: [] 
  }

  componentDidMount = async() => {
    const nowPlayingURL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${config.api_key}`;
    const response = await axios.get(nowPlayingURL);
    this.setState({movies: response.data.results})
  }  
  render() {
    const imageURL = "http://image.tmdb.org/t/p/w300";
    const moviePoster = this.state.movies.map((movie, index) => {
      return (
        <div key={index}>{`${imageURL}${movie.poster_path}`}</div>
      )
    })

    return (
      <div>
        <h1>{moviePoster}</h1>
      </div>
    )
  }
}
