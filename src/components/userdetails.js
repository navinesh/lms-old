import React, { Component, PropTypes } from 'react'

class PendingRecordList extends Component {
  render() {
    const { user_detail } = this.props
    const userItems = []
    for (const x in user_detail) {
      user_detail[x].leaverecord.map((detail) => {
        if (detail.leave_status === 'pending') {
          userItems.push(<tr key={detail.id}>
                      <td>{detail.leave_name}</td>
                      <td>{detail.leave_days} day(s)</td>
                      <td>{detail.start_date}</td>
                      <td>{detail.end_date}</td>
                      <td>{detail.leave_reason}</td>
                    </tr>)
        }
      });
    }
    if (userItems.length > 0){
      return (
        <table className="table table-bordered table-hover">
          <thead className="thead-default">
            <tr>
              <th>Leave type</th>
              <th>Leave days</th>
              <th>Start date</th>
              <th>End date</th>
              <th>Reason</th>
            </tr>
          </thead>
          <tbody>
          {userItems}
          </tbody>
        </table>
      );
    }
    else {
      return (
        <div>
        <p>None.</p>
        </div>
      );
    }
  }
}

class ApprovedRecordList extends Component {
  render() {
    const { user_detail } = this.props
    const userItems = []
    for (const x in user_detail) {
      user_detail[x].leaverecord.map((detail) => {
        if (detail.leave_status === 'approved') {
          userItems.push(<tr key={detail.id}>
                      <td>{detail.leave_name}</td>
                      <td>{detail.leave_days} day(s)</td>
                      <td>{detail.start_date}</td>
                      <td>{detail.end_date}</td>
                      <td>{detail.leave_reason}</td>
                    </tr>)
        }
      });
    }
    if (userItems.length > 0){
      return (
        <table className="table table-bordered table-hover">
          <thead className="thead-default">
            <tr>
              <th>Leave type</th>
              <th>Leave days</th>
              <th>Start date</th>
              <th>End date</th>
              <th>Reason</th>
            </tr>
          </thead>
          <tbody>
          {userItems}
          </tbody>
        </table>
      );
    }
    else {
      return (
        <div>
        <p>None.</p>
        </div>
      );
    }
  }
}

class UserRecord extends Component {
  render() {
    const { user_detail, message } = this.props
    if(message){
      return (
        <div className="container text-xs-center" style={{paddingTop: '100px'}}>
          <div className="offset-sm-2 col-sm-8">
            <p>The site configured at this address does not contain the requested resource.</p>
          </div>
        </div>
      );
    }

    const userItem = user_detail.map((user) => {
      if(user.maternity) {
        return (
          <div key={user.id}>
            <h4 className="card-title">{user.othernames} {user.surname}</h4>
              <div className="col-sm-2"><h5 className="text-primary">{user.annual} day(s)</h5><span className="text-muted">Annual</span></div>
              <div className="col-sm-2"><h5 className="text-primary">{user.sick} day(s)</h5><span className="text-muted">Sick</span></div>
              <div className="col-sm-2"><h5 className="text-primary">{user.bereavement} day(s)</h5><span className="text-muted">Bereavement</span></div>
              <div className="col-sm-2"><h5 className="text-primary">{user.christmas} day(s)</h5><span className="text-muted">Christmas</span></div>
              <div className="col-sm-2"><h5 className="text-primary">{user.maternity} day(s)</h5><span className="text-muted">Maternity</span></div>
          </div>
        );
      }
      else {
        return (
          <div key={user.id}>
            <h4 className="card-title">{user.othernames} {user.surname}</h4>
              <div className="col-sm-3"><h5 className="text-primary">{user.annual} day(s)</h5><span className="text-muted">Annual</span></div>
              <div className="col-sm-3"><h5 className="text-primary">{user.sick} day(s)</h5><span className="text-muted">Sick</span></div>
              <div className="col-sm-3"><h5 className="text-primary">{user.bereavement} day(s)</h5><span className="text-muted">Bereavement</span></div>
              <div className="col-sm-3"><h5 className="text-primary">{user.christmas} day(s)</h5><span className="text-muted">Christmas</span></div>
          </div>
        );
      }
    });
    return (
      <div className="card card-block">
      {userItem}
      </div>
    );
  }
}

class UserDetails extends Component {
  render() {
    return (
      <div className="UserDetails">
        <UserRecord user_detail={this.props.user_detail} message={this.props.message} />
        <div className="row">
          <h4 className="col-sm-12">Leave schedule</h4>
          <div className="col-sm-12">
            <h5 className="text-muted">Pending</h5>
            <PendingRecordList user_detail={this.props.user_detail} />
          </div>
          <div className="col-sm-12">
            <h5 className="text-muted">Approved</h5>
            <ApprovedRecordList user_detail={this.props.user_detail} />
          </div>
        </div>
      </div>
    );
  }
}

UserDetails.propTypes = {
  user_detail: PropTypes.array.isRequired,
  message: PropTypes.string
}

export default UserDetails;
