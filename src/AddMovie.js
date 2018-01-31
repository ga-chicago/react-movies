import React, { Component } from 'react';

class AddMovie extends Component {
  constructor(){
    super();

    this.state = {
      movie: ''
    }
  }
  handleMovieGuy = (e) => {
    this.setState({movie: e.currentTarget.value})
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.newMovie(this.state.movie)
  }
  render(){
    return (
        <form>
          <input type='text' placeholder="movie" value={this.state.movie} onChange={this.handleMovieGuy}/>
          <button onClick={this.handleSubmit}>Add Movie</button>
        </form>
      )
  }
}




export default AddMovie;
