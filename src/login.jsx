import React from 'react';

const url = 'login'

class LoginForm extends React.Component {
  constructor(props) {
    super();
    this.state = {email: '', password: '', message: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  };

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
    this.props.onFormSubmit({
      email: email,
      password: password
    },
     (data) => {
       this.setState({message: data.message});
     }
    );
  }

  render(){
    return(
      <div className="col-sm-4">
        <div className="card card-block">
          <form onSubmit={this.handleSubmit}>
            <fieldset className="form-group">
              <label for="email">Email address</label>
              <input type="email" className="form-control"
                placeholder="Enter email" id="email"
                onChange={this.handleEmailChange} />
            </fieldset>
            <fieldset className="form-group">
              <label for="password">Password</label>
              <input type="password" className="form-control"
                placeholder="Password" id="password"
                onChange={this.handlePasswordChange} />
              <small className="text-muted">Enter your leave management system password.</small>
            </fieldset>
            <fieldset className="form-group">
              <button type="submit" className="btn btn-primary col-sm-12">Log in</button>
            </fieldset>
          </form>
          <div className="text-danger">{this.state.message}</div>
        </div>
        <a href="/login" className="btn btn-primary-outline col-md-12">Forgot your password?</a>
      </div>
    );
  }
}

class LoginBox extends React.Component{
  handleFormSubmit (login, callback) {
    $.ajax({
      url: url,
      dataType: 'json',
      type: 'POST',
      data: login,
      success: callback,
      error: (xhr, status, err) => {
        console.error(url, status, err.toString());
      }
    });
  }

  render(){
    return(
      <LoginForm onFormSubmit={this.handleFormSubmit} />
    );
  }
}

export default LoginBox;
