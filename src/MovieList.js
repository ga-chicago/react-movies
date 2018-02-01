import React, { Component } from 'react'


class MovieList extends Component {
  deleteItem = (e) => {
    console.log(e.currentTarget.id)
    this.props.deleteMovie(e.currentTarget.id)
  }
  handleEdit = (e) => {
    console.log(e.currentTarget.previousSibling.id, "<---- This may be useful in knowing what you are editiing")
    this.props.editMovie(e.currentTarget.previousSibling.id)
  }
  render() {

    const movieList = this.props.movies.map((movie, i) => {
      return <li key={i}>{movie}
                <button id={i} onClick={this.deleteItem}>Delete</button>
                <button onClick={this.handleEdit}>Edit</button>
              </li>


    })

    return (
      <ul>
        {movieList}
      </ul>
      )
  }

}


export default MovieList
