import React, { Component, PropTypes } from 'react'
var Loader = require('halogen/ClipLoader');
var DatePicker = require('react-datepicker');

export default class LeaveApplications extends Component {
  constructor() {
    super()
    this.state = {
      errorMessage: '',
      successMessage: ''
    };
    this.handleLeaveChange = this.handleLeaveChange.bind(this);
    this.handleLeaveTypeChange = this.handleLeaveTypeChange.bind(this);
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
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

  handleStartDateChange (e) {
     this.setState({startDate: e});
   }

   handleEndDateChange (e) {
     this.setState({endDate: e});
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
    const startDate = this.state.startDate ? this.state.startDate : null;
    const endDate = this.state.endDate ? this.state.endDate : null;
    const supervisorEmail = this.state.supervisorEmail ? this.state.supervisorEmail.trim() : null;
    const secretaryEmail = this.state.secretaryEmail ? this.state.secretaryEmail.trim() : null;
    const reason = this.state.reason ? this.state.reason.trim() : null;

    if (!user_id || !leave || !leaveType || !startDate || !endDate || !supervisorEmail || !reason) {
      this.setState({errorMessage: 'One or more required fields are missing!'});
      return;
    }

    this.setState({errorMessage: ''});
    this.setState({successMessage: 'Your application has been submitted.'});

    const applicationDetails = { user_id: user_id, leave: leave, leaveType: leaveType,
      startDate: startDate, endDate: endDate, supervisorEmail: supervisorEmail,
      secretaryEmail: secretaryEmail, reason: reason }
    this.props.onLeaveApplicationClick(applicationDetails)
  }

  render(){
    const { isFetching, message } = this.props
    if (this.state.successMessage) {
      return(
        <div className="container text-xs-center" style={{paddingTop: '100px'}}>
          <div className="col-sm-12">
            <h1 className="display-4">{this.state.successMessage}</h1>
            <br />
            <a className="btn btn-outline-primary btn-lg" href="/leaveapplication">apply for leave</a>
          </div>
        </div>
      );
    }
    else {
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
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label for="startDate">Start date</label>
                    <DatePicker className="form-control"
                      selected={this.state.startDate}
                      startDate={this.state.startDate}
                      endDate={this.state.endDate}
                      filterDate={this.isweekdays}
                      onChange={this.handleStartDateChange} />
              	   </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label for="endDate">End date</label>
                    <DatePicker className="form-control"
                      selected={this.state.endDate}
                      startDate={this.state.startDate}
                      endDate={this.state.endDate}
                      filterDate={this.isweekdaysMin}
                      onChange={this.handleEndDateChange} />
                  </div>
                </div>
              </div>
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
                <small className="form-text text-muted">A medical certificate is required for absence of two consecutive days or more and after four single day absences.</small>
              </fieldset>
              <fieldset className="form-group">
                <button type="submit" className="btn btn-primary col-xs-12 col-sm-12">Submit</button>
              </fieldset>
            </form>
            <div className="text-danger text-xs-center">
              {isFetching ?
                <Loader color="#0275d8" size="20px" />:
                message}
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
}

LeaveApplications.propTypes = {
  onLeaveApplicationClick: PropTypes.func.isRequired,
  message: PropTypes.string,
  isFetching: PropTypes.bool.isRequired
}
