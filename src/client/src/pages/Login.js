import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Input from '../components/Input'

export default class Register extends Component {
  state = {
    email: '',
    password: '',
    error: {}
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    
  }

  render() {
    let {email, password, error} = this.state;
    return (
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1 className="text-center display-4">Login Here</h1>
          <form onSubmit={this.handleSubmit}>

            <Input label="Email: " type="email" name="email" value={email} placeholder="Input your email" onchange={this.onChange} />

            <Input label="Password: " type="password" name="password" value={password} placeholder="Input your password" onchange={this.onChange} />

            <Link to='/register'>Don't Have Account? Register Here</Link>

            <button className="btn btn-primary d-block my-3">Login</button>

          </form>
        </div>
      </div>
    )
  }
}

