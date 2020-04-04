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
        <div className="col s3" key={index}>
          <img src={`${imageURL}${movie.poster_path}`} alt=''/>
        </div>
      )
    })

    return (
      <div className="row">
        <h1>{moviePoster}</h1>
      </div>
    )
  }
}
