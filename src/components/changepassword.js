import React, { Component, PropTypes } from 'react'
var Loader = require('halogen/ClipLoader');

export default class UserChange extends Component {
  constructor() {
    super()
    this.state = { errorMessage: '' };
  }

  handleCurrentPasswordChange (e) {
    this.setState({currentPassword: e.target.value});
  }

  handleNewPasswordChange (e) {
    this.setState({newPassword: e.target.value});
  }

  handleNewPasswordConfirmChange (e) {
    this.setState({newPasswordConfirm: e.target.value});
  }

  handleSubmit (e) {
    e.preventDefault();

    const { auth_info } = this.props
    let auth_token = auth_info.auth_token;
    if(!auth_token) {
      auth_token= localStorage.getItem('auth_token')
    }

    const currentPassword = this.state.currentPassword ? this.state.currentPassword.trim() : null;
    const newPassword = this.state.newPassword ? this.state.newPassword.trim() : null;
    const newPasswordConfirm = this.state.newPasswordConfirm ? this.state.newPasswordConfirm.trim() : null;

    if (!currentPassword || !newPassword || !newPasswordConfirm) {
      this.setState({errorMessage: 'One or more required fields are missing!'});
      return;
    }

    if (newPassword !== newPasswordConfirm) {
      this.setState({errorMessage: 'Your new passwords do not match!'});
      return;
    }

    this.setState({errorMessage: ''});

    const creds = { currentPassword: currentPassword,
                    newPassword: newPassword,
                    auth_token: auth_token }
    this.props.onChangeClick(creds)
  }

  render(){
    return(
      <div className="card card-block">
        <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <label for="currentPassword">Current password</label>
          <input type="password" className="form-control"
            placeholder="Current password" id="currentPassword"
            onChange={this.handleCurrentPasswordChange.bind(this)} />
        </div>
        <div className="form-group">
          <label for="newPassword">New password</label>
          <input type="password" className="form-control"
            placeholder="New password" id="newPassword"
            onChange={this.handleNewPasswordChange.bind(this)} />
        </div>
        <div className="form-group">
          <label for="newPasswordConfirm">Confirm new password</label>
          <input type="password" className="form-control"
            placeholder="Confirm new password" id="newPasswordConfirm"
            onChange={this.handleNewPasswordConfirmChange.bind(this)} />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary col-xs-12 col-sm-12">Update password</button>
        </div>
        </form>
        <div className="text-danger text-xs-center p-t-3">
          {this.props.isFetching ?
            <Loader color="#0275d8" size="20px" />:
            this.props.message}
        </div>
        <div className="text-danger text-xs-center">
          {this.state.errorMessage ?
            <div>{this.state.errorMessage}</div> :
               ''}
        </div>
      </div>

    )
  }
}

UserChange.propTypes = {
  onChangeClick: PropTypes.func.isRequired,
  message: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
  auth_info: PropTypes.object.isRequired
}
