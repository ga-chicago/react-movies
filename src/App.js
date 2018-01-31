import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login'
import Main from './Main'


class App extends Component {
  constructor(){
    super()

    this.state = {
      username: ''
    }
  }
  getUsername = (username) => {
    this.setState({username: username})
  }
  render() {
    return (
      <div>
        {this.state.username === '' ? <Login getUsername={this.getUsername} /> : <Main username={this.state.username}/> }
      </div>
    );
  }
}

export default App;
