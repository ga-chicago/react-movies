import React, { Component } from 'react';



class Edit extends Component {
  constructor(props){
    super(props)

    this.state = {
      editMovie: this.props.editedMovie
    }
  }
  handleEdit = (e) => {


    if(e.charCode === 13){
      this.props.changeMovie(this.state.editMovie)
    } else {
        this.setState({editMovie: e.currentTarget.value})
    }

  }
  render(){

    return (
      <input type="text" value={this.state.editMovie} onChange={this.handleEdit} onKeyPress={this.handleEdit}/>
      )
  }
}


export default Edit;
