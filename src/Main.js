import React, { Component } from 'react';
import MovieList from './MovieList'
import AddMovie from './AddMovie'
import Edit from './Edit'

class Main extends Component {
  constructor(){
    super();

    this.state = {
      movies: ['et', 'contact', 'phenomenon'],
      editedMovie: ''
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
  editMovie = (indexOfMovie) => {
    this.setState({editedMovie: this.state.movies[indexOfMovie]})
  }
  changeMovie = (updatedMovie) => {
    console.log(updatedMovie)
    const state = this.state;
    state.movies.splice(this.state.movies.indexOf(this.state.editedMovie), 1, updatedMovie)
    state.editedMovie = '';
    this.setState(state)
  }
  render(){
    return (
      <div>
        <span>Hiii {this.props.username}</span>
        <MovieList movies={this.state.movies} deleteMovie={this.deleteMovie} editMovie={this.editMovie}/>
        <AddMovie newMovie={this.newMovie}/>
        {this.state.editedMovie === '' ? null : <Edit editedMovie={this.state.editedMovie} changeMovie={this.changeMovie}/>}
      </div>
      )
  }
}

export default Main;
