import React, { Component } from 'react'

export default class UserError extends Component {
  render(){
    return(
      <div className="container text-xs-center">
        <div className="offset-sm-2 col-sm-8">
          <h1>404</h1>
          <p>
            <h3>That's an error.</h3>
          </p>
          <h5>The site configured at this address does not contain the requested file.</h5>
        </div>
      </div>
    );
  }
}
