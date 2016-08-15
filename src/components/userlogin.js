import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
var Loader = require('halogen/ClipLoader');

export default class Login extends Component {

  handleEmailChange (e) {
    this.setState({email: e.target.value});
  }

  handlePasswordChange (e) {
    this.setState({password: e.target.value});
  }

  handleSubmit (e) {
    e.preventDefault();
    const email = this.state.email.trim();
    const password = this.state.password.trim();

    if (!email || !password) {
      return;
    }

    const creds = { email:email, password: password }
    this.props.onLoginClick(creds)
  }

  render(){
    return(
      <div className="Login">
        <div className="card card-block">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <fieldset className="form-group">
              <label for="email">Email address</label>
              <input type="email" className="form-control"
                placeholder="Enter email" id="email"
                onChange={this.handleEmailChange.bind(this)} />
            </fieldset>
            <fieldset className="form-group">
              <label for="password">Password</label>
              <input type="password" className="form-control"
                placeholder="Password" id="password"
                onChange={this.handlePasswordChange.bind(this)} />
              <small className="text-muted">Enter your leave management system password.</small>
            </fieldset>
            <fieldset className="form-group">
              <button type="submit" className="btn btn-primary col-xs-12 col-sm-12">Log in</button>
            </fieldset>
          </form>
          <div className="text-danger text-xs-center">
            {this.props.isFetching ?
              <Loader color="#0275d8" size="20px" />:
              this.props.message}
          </div>
        </div>
        <Link to="/login" className="btn col-xs-12 col-sm-12">Forgot your password?</Link>
      </div>
    );
  }
}

Login.propTypes = {
onLoginClick: PropTypes.func.isRequired,
message: PropTypes.string,
isFetching: PropTypes.bool.isRequired
}
