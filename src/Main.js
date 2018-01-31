import React, { Component } from 'react';
import MovieList from './MovieList'
import AddMovie from './AddMovie'

class Main extends Component {
  constructor(){
    super();

    this.state = {
      movies: ['et', 'contact', 'phenomenon']
    }
  }
  newMovie = (movie) => {
    this.setState({
      movies: [...this.state.movies, movie]
    })
  }
  deleteMovie = (indexOfMovie) => {
    const state = this.state;
    state.movies.splice(indexOfMovie, 1);
    this.setState(state)
  }
  render(){
    return (
      <div>
        <span>Hiii {this.props.username}</span>
        <MovieList movies={this.state.movies} deleteMovie={this.deleteMovie}/>
        <AddMovie newMovie={this.newMovie}/>
      </div>
      )
  }
}

export default Main;
