import React, { Component, PropTypes } from 'react'

export default class Logout extends Component {
  render(){
    const { onLogoutClick } = this.props
    return(
      <div className="Logout">
      <button onClick={() => onLogoutClick()} className="btn btn-primary-outline">
        Log out
      </button>
      </div>
    );
  }
}

Logout.propTypes = {
onLogoutClick: PropTypes.func.isRequired,
}
