import React, { Component } from 'react';


class Main extends Component {
  constructor(){
    super();

    this.state = {
      movies: ['et', 'contact', 'phenomenon']
    }
  }
  render(){
    return (
      <div>
        Hiii {this.props.username}
      </div>
      )
  }
}

export default Main;
