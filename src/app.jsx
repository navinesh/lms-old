var React = require('react');
var ReactDOM = require('react-dom');

var LeaveCalendar = React.createClass({
  render: function(){
    return (
      <div className="col-sm-8">
        <h5>Leave calendar</h5>
          <table className="table">
            <thead className="thead-default">
              <tr>
                <th>Name</th>
                <th>Leave type</th>
                <th>Start date</th>
                <th>End date</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>name</td>
                <td>leave type</td>
                <td>start date</td>
                <td>end date</td>
                <td>day(s)</td>
              </tr>
            </tbody>
          </table>
      </div>
    );
  }
});

var LoginForm = React.createClass({
  render: function(){
    return(
      <div className="col-sm-4">
        <div className="card card-block">
          <form>
            <fieldset className="form-group">
              <label for="InputEmail">Email address</label>
              <input type="email" className="form-control" id="InputEmail" placeholder="Enter email" />
            </fieldset>
            <fieldset className="form-group">
              <label for="InputPassword">Password</label>
              <input type="password" className="form-control" id="InputPassword" placeholder="Password" />
              <small className="text-muted">Enter your leave management system password.</small>
            </fieldset>
            <fieldset className="form-group">
              <button type="submit" className="btn btn-primary col-sm-12">Log in</button>
            </fieldset>
          </form>
        </div>
        <a href="#" className="btn btn-primary-outline col-md-12">Forgot your password?</a>
      </div>
    );
  }
});

var PageContent = React.createClass({
  render: function(){
    return (
      <div className="pageContent">
      <LeaveCalendar />
      <LoginForm />
      </div>
    );
  }
});

ReactDOM.render(<PageContent />, document.getElementById('body content'));
