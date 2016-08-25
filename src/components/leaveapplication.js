import React, { Component, PropTypes } from 'react'
var Loader = require('halogen/ClipLoader');

export default class LeaveApplications extends Component {
  constructor() {
    super()
    this.state = { errorMessage: '' };
    this.handleLeaveChange = this.handleLeaveChange.bind(this);
    this.handleLeaveTypeChange = this.handleLeaveTypeChange.bind(this);
    this.handleDateFromChange = this.handleDateFromChange.bind(this);
    this.handleDateToChange = this.handleDateToChange.bind(this);
    this.handleSupervisorEmailChange = this.handleSupervisorEmailChange.bind(this);
    this.handleSecretaryEmailChange = this.handleSecretaryEmailChange.bind(this);
    this.handleReasonChange = this.handleReasonChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleLeaveChange (e) {
    this.setState({leave: e.target.value});
  }

  handleLeaveTypeChange (e) {
    this.setState({leaveType: e.target.value});
  }

  handleDateFromChange (e) {
    this.setState({dateFrom: e.target.value});
  }

  handleDateToChange (e) {
    this.setState({dateTo: e.target.value});
  }

  handleSupervisorEmailChange (e) {
    this.setState({supervisorEmail: e.target.value});
  }

  handleSecretaryEmailChange (e) {
    this.setState({secretaryEmail: e.target.value});
  }

  handleReasonChange (e) {
    this.setState({reason: e.target.value});
  }

  handleSubmit (e) {
    e.preventDefault();
    const user_id = localStorage.getItem('user_id');
    const leave = this.state.leave;
    const leaveType = this.state.leaveType;
    const dateFrom = this.state.dateFrom ? this.state.dateFrom.trim() : null;
    const dateTo = this.state.dateTo ? this.state.dateTo.trim() : null;
    const supervisorEmail = this.state.supervisorEmail ? this.state.supervisorEmail.trim() : null;
    const secretaryEmail = this.state.secretaryEmail ? this.state.secretaryEmail.trim() : null;
    const reason = this.state.reason ? this.state.reason.trim() : null;

    if (!user_id || !leave || !leaveType || !dateFrom || !dateTo || !supervisorEmail || !reason) {
      this.setState({errorMessage: 'One or more required fields are missing!'});
      return;
    }

    this.setState({errorMessage: ''});

    const applicationDetails = { user_id: user_id, leave: leave, leaveType: leaveType,
      dateFrom: dateFrom, dateTo: dateTo, supervisorEmail: supervisorEmail,
      secretaryEmail: secretaryEmail, reason: reason }
    this.props.onLeaveApplicationClick(applicationDetails)
  }

  render(){
    return(
      <div className="col-xs-12 col-sm-6 offset-sm-3">
        <div className="card card-block">
          <form onSubmit={this.handleSubmit}>
            <fieldset className="form-group">
              <label for="leave">Leave</label>
              <select className="form-control" id="leave" onChange={this.handleLeaveChange}>
                <option></option>
                <option>annual</option>
                <option>sick</option>
                <option>bereavement</option>
                <option>christmas</option>
                <option>birthday</option>
                <option>maternity</option>
                <option>lwop</option>
                <option>other</option>
              </select>
            </fieldset>
            <fieldset className="form-group">
              <label for="leaveType">Leave type</label>
              <select className="form-control" id="leaveType" onChange={this.handleLeaveTypeChange}>
                <option></option>
                <option>full</option>
                <option>half day am</option>
                <option>half day pm</option>
              </select>
            </fieldset>
            <fieldset className="form-group">
  						<label for="dateFrom">From</label>
  							<input type="date" className="form-control"
                placeholder="month/day/year" id="dateFrom"
                onChange={this.handleDateFromChange} />
            </fieldset>
            <fieldset className="form-group">
  						<label for="dateTo">To</label>
  							<input type="date" className="form-control"
                placeholder="month/day/year" id="dateTo"
                onChange={this.handleDateToChange} />
            </fieldset>
            <fieldset className="form-group">
              <label for="supervisorEmail">Supervisor email</label>
              <input type="email" className="form-control"
                placeholder="Supervisor email" id="supervisorEmail"
                onChange={this.handleSupervisorEmailChange} />
            </fieldset>
            <fieldset className="form-group">
              <label for="secretaryEmail">Second supervisor / secretary email</label>
              <input type="email" className="form-control"
                placeholder="Second supervisor / secretary email" id="secretaryEmail"
                onChange={this.handleSecretaryEmailChange} />
            </fieldset>
            <fieldset className="form-group">
              <label for="reason">Reason</label>
              <input type="text" className="form-control"
                placeholder="Reason for leave" id="reason"
                onChange={this.handleReasonChange} />
            </fieldset>
            <fieldset className="form-group">
              <label for="sicksheet">Sick sheet</label>
              <input type="file" className="form-control-file" id="sicksheet" />
              <small className="text-muted">A medical certificate is required for absence of two consecutive days or more and after four single day absences.</small>
            </fieldset>
            <fieldset className="form-group">
              <button type="submit" className="btn btn-primary col-xs-12 col-sm-12">Submit</button>
            </fieldset>
          </form>
          <div className="text-danger text-xs-center">
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
      </div>
    );
  }
}

LeaveApplications.propTypes = {
  onLeaveApplicationClick: PropTypes.func.isRequired,
  message: PropTypes.string,
  isFetching: PropTypes.bool.isRequired
}
