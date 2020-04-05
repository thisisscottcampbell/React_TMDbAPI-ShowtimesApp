import React, { Component } from 'react';
import axios from 'axios';
import config from '../config'

export default class Movie extends Component {
  
  state = { movie: {} }
  
  // componenetDiDMount = () => {
  //  const mid = this.props.match.params.movieId
  //   const singleMovieUrl = `https://api.themoviedb.org/3/movie/${mid}?api_key=${config.api_key}`
  //   axios.get(singleMovieUrl).then((response) => {
  //     this.setState({ movie: response.data })
  //   })
  // }
  componentDidMount(){
    const id = this.props.match.params.movieId
    const movieURL = `https://api.themoviedb.org/3/movie/${id}?api_key=${config.api_key}`
    axios.get(movieURL).then((response)=>{
        console.log(response.data);
        this.setState({
            movie: response.data
        })
    })
  }

 

  render() {
    if(this.state.movie.title === undefined) {
      return (<h1>Loading... </h1>)
    }

    const imageURL = `http://image.tmdb.org/t/p/w300${this.state.movie.poster_path}`;
    return (
      <div>
        <img src={imageURL} alt=""/>
        <p>{this.state.movie.title}</p>
        <p>Budget: {this.state.movie.budget}</p>
        <p>Tagline: {this.state.movie.tagline}</p>
        <p>Overview: {this.state.movie.overview}</p>
        <h6>(id: {this.props.match.params.movieId})</h6>
      </div>
    )
  }
}
