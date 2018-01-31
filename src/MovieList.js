import React, { Component } from 'react'


class MovieList extends Component {
  deleteItem = (e) => {
    console.log(e.currentTarget.id)
    this.props.deleteMovie(e.currentTarget.id)
  }
  render() {

    const movieList = this.props.movies.map((movie, i) => {
      return <li key={i}>{movie} <button id={i} onClick={this.deleteItem}>Delete</button></li>


    })

    return (
      <ul>
        {movieList}
      </ul>
      )
  }

}


export default MovieList
