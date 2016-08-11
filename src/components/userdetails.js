import React, { Component, PropTypes } from 'react'

class PendingRecordList extends Component {
  render() {
    const { user_detail } = this.props
    let userItems = []
    for (let x in user_detail) {
      let uItems = user_detail[x].leaverecord.map((detail) => {
        if (detail.leave_status === 'pending') {
          userItems.push(<tr key={detail.id}>
                      <td>{detail.leave_name}</td>
                      <td>{detail.leave_days} day(s)</td>
                      <td>{detail.start_date}</td>
                      <td>{detail.end_date}</td>
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
            </tr>
          </thead>
          <tbody>
          {userItems}
          </tbody>
        </table>
      );
    }
    return (
      <div>
      <p>None.</p>
      </div>
    );
  }
}

class ApprovedRecordList extends Component {
  render() {
    const { user_detail } = this.props
    let userItems = []
    for (let x in user_detail) {
      let uItems = user_detail[x].leaverecord.map((detail) => {
        if (detail.leave_status === 'approved') {
          userItems.push(<tr key={detail.id}>
                      <td>{detail.leave_name}</td>
                      <td>{detail.leave_days} day(s)</td>
                      <td>{detail.start_date}</td>
                      <td>{detail.end_date}</td>
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
            </tr>
          </thead>
          <tbody>
          {userItems}
          </tbody>
        </table>
      );
    }
    return (
      <div>
      <p>None.</p>
      </div>
    );
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
      return (
        <div key={user.id}>
          <h4 className="card-title">{user.othernames} {user.surname}</h4>
           <p className="text-primary"><span className="text-muted">Annual</span> {user.annual} day(s)</p>
           <p className="text-primary"><span className="text-muted">Sick</span> {user.sick} day(s)</p>
           <p className="text-primary"><span className="text-muted">Bereavement</span> {user.bereavement} day(s)</p>
           <p className="text-primary"><span className="text-muted">Christmas</span> {user.christmas} day(s)</p>
        </div>
      );
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
      <div className="row">
        <div className="col-sm-4">
          <UserRecord user_detail={this.props.user_detail} message={this.props.message} />
        </div>
        <div className="col-sm-8">
          <div className="col-sm-12">
            <h6 className="text-muted">PENDING LEAVE SCHEDULE</h6>
            <PendingRecordList user_detail={this.props.user_detail} />
          </div>
          <div className="col-sm-12">
            <h6 className="text-muted">APPROVED LEAVE SCHEDULE</h6>
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
