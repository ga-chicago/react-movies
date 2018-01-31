import React, { Component } from 'react';


class Login extends Component {
  constructor(){
    super()

    this.state = {
      username: ''
    }
  }
  handleChange = (e) => {

    this.setState({username: e.currentTarget.value})
  }
  handleSubmit = (e) => {
    e.preventDefault()

    this.props.getUsername(this.state.username)
  }
  render(){

    return (
      <form>
        <input type='text' placeholder="username" value={this.state.username} onChange={this.handleChange}/>
        <button onClick={this.handleSubmit}>Submit Username </button>
     </form>

      )
  }
}

export default Login;
