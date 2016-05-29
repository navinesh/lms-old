import React from 'react';

class LoginForm extends React.Component{
  render() {
    return (
      <div className="col-sm-4">
        <div className="card card-block">
          <form>
            <fieldset className="form-group">
              <label for="email">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="Enter email" />
            </fieldset>
            <fieldset className="form-group">
              <label for="password">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Password" />
              <small className="text-muted">Enter your leave management system password.</small>
            </fieldset>
            <fieldset className="form-group">
              <button type="submit" className="btn btn-primary col-sm-12">Log in</button>
            </fieldset>
          </form>
        </div>
        <a href="/login" className="btn btn-primary-outline col-md-12">Forgot your password?</a>
      </div>
    );
  }
}

export default LoginForm;
