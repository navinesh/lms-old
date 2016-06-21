import React, { Component, PropTypes } from 'react'

export default class Logout extends Component {
  render(){
    const { onLogoutClick } = this.props
    return(
      <button onClick={() => onLogoutClick()} className="btn btn-primary-outline">
        Log out
      </button>
    );
  }
}

Logout.propTypes = {
onLogoutClick: PropTypes.func.isRequired,
}
