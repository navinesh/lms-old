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
        <tr key={user.id}>
          <td>{user.othernames} {user.surname}</td>
          <td>{user.annual} day(s)</td>
          <td>{user.sick} day(s)</td>
          <td>{user.bereavement} day(s)</td>
          <td>{user.christmas} day(s)</td>
        </tr>
      );
    });
    return (
      <table className="table table-bordered">
        <thead className="thead-default">
          <tr>
            <th>Name</th>
            <th>Annual</th>
            <th>Sick</th>
            <th>Bereavement</th>
            <th>Christmas</th>
          </tr>
        </thead>
        <tbody>
        {userItem}
        </tbody>
      </table>
    );
  }
}

class UserDetails extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <h6>Leave record</h6>
          <UserRecord user_detail={this.props.user_detail} message={this.props.message} />
        </div>
        <div className="col-sm-12">
          <h6>Pending leave schedule</h6>
          <PendingRecordList user_detail={this.props.user_detail} />
        </div>
        <div className="col-sm-12">
          <h6>Approved leave schedule</h6>
          <ApprovedRecordList user_detail={this.props.user_detail} />
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
