import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Input from '../components/Input';
import {connect} from 'react-redux';
import {register} from '../store/actions/authActions'

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    error: {}
  }

  static getDerivedStateFromProps(nextProps, preState) {
    if (JSON.stringify(nextProps.auth.error) !== JSON.stringify(preState.error)) {
      return { error: nextProps.auth.error };
    }
    return null;
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    let {error, ...user} = this.state;
    this.props.register(user, this.props.history);
  }

  render() {
    let {name, email, password, confirmPassword, error} = this.state;
    // console.log(this.props);
    
    return (
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1 className="text-center display-4">Register Here</h1>
          <form onSubmit={this.handleSubmit}>
            
            <Input label="Name: " type="text" name="name" value={name} placeholder="Input your name" onchange={this.handleChange} className={error.name? "form-control is-invalid": "form-control"}
            error={error.name ? error.name : null} />

            <Input label="Email: " type="email" name="email" value={email} placeholder="Input your email" onchange={this.handleChange} className={error.email? "form-control is-invalid": "form-control"} error={error.email ? error.email : null} />
            
            <Input label="Password: " type="password" name="password" value={password} placeholder="Input your password" onchange={this.handleChange} className={error.password? "form-control is-invalid": "form-control"} error={error.password ? error.password : null} />

            <Input label="Confirm Password: " type="password" name="confirmPassword" value={confirmPassword} placeholder="Retype your password" onchange={this.handleChange} className={error.confirmPassword? "form-control is-invalid": "form-control"} error={error.confirmPassword ? error.confirmPassword : null} />
            
            <Link to='/login'>Already Have Account? Login Here</Link>

            <button className="btn btn-primary d-block my-3">Register</button>
            
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, {register})(Register)
