import React, { Component, PropTypes } from 'react'

export default class Login extends Component {

  handleEmailChange (e) {
    this.setState({email: e.target.value});
  }

  handlePasswordChange (e) {
    this.setState({password: e.target.value});
  }

  handleSubmit (e) {
    e.preventDefault();
    let email = this.state.email.trim();
    let password = this.state.password.trim();

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
              <button type="submit" className="btn btn-primary col-sm-12">Log in</button>
            </fieldset>
          </form>
          <div className="text-danger">{this.props.message}</div>
        </div>
        <a href="/login" className="btn btn-primary-outline col-md-12">Forgot your password?</a>
      </div>
    );
  }
}

Login.propTypes = {
onLoginClick: PropTypes.func.isRequired,
message: PropTypes.string
}
