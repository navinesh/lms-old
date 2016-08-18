import React, { Component, PropTypes } from 'react'

class PendingRecordList extends Component {
  render() {
    const { user_detail } = this.props
    const userItems = []
    for (let x = 0; x < user_detail.length; x++) {
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
        return (userItems)
      });
    }
    if (userItems.length > 0){
      return (
        <div>
        <h6>PENDING LEAVE SCHEDULE</h6>
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
      </div>
      );
    }
    else {
      return (<div />);
    }
  }
}

class ApprovedRecordList extends Component {
  render() {
    const { user_detail } = this.props
    const userItems = []
    for (let x = 0; x < user_detail.length; x++) {
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
        return (userItems)
      });
    }
    if (userItems.length > 0){
      return (
        <div>
        <h6>APPROVED LEAVE SCHEDULE</h6>
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
      </div>
      );
    }
    else {
      return (<div />);
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
            <div className="row">
              <h5 className="card-title col-sm-12">{user.othernames} {user.surname}</h5>
              <div className="col-sm-2">
                <div className="card card-block text-xs-center">
                  <h3 className="card-title">{user.annual}</h3>
                  <p className="card-text">Annual</p>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="card card-block text-xs-center">
                  <h3 className="card-title">{user.sick}</h3>
                  <p className="card-text">Sick</p>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="card card-block text-xs-center">
                  <h3 className="card-title">{user.bereavement}</h3>
                  <p className="card-text">Bereavement</p>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="card card-block text-xs-center">
                  <h3 className="card-title">{user.christmas}</h3>
                  <p className="card-text">Christmas</p>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="card card-block text-xs-center">
                  <h3 className="card-title">{user.maternity}</h3>
                  <p className="card-text">Maternity</p>
                </div>
              </div>
            </div>
          </div>
        );
      }
      else {
        return (
          <div key={user.id}>
            <div className="row">
              <h5 className="card-title col-sm-12">{user.othernames} {user.surname}</h5>
              <div className="col-sm-3">
                <div className="card card-block text-xs-center">
                  <h3 className="card-title">{user.annual}</h3>
                  <p className="card-text">Annual</p>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="card card-block text-xs-center">
                  <h3 className="card-title">{user.sick}</h3>
                  <p className="card-text">Sick</p>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="card card-block text-xs-center">
                  <h3 className="card-title">{user.bereavement}</h3>
                  <p className="card-text">Bereavement</p>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="card card-block text-xs-center">
                  <h3 className="card-title">{user.christmas}</h3>
                  <p className="card-text">Christmas</p>
                </div>
              </div>
            </div>
          </div>
        );
      }
    });
    return (
      <div>
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
        {/*<div className="row">*/}
          <div className="col-sm-12">
            <PendingRecordList user_detail={this.props.user_detail} />
          </div>
          <div className="col-sm-12">
            <ApprovedRecordList user_detail={this.props.user_detail} />
          </div>
        {/*</div>*/}
      </div>
    );
  }
}

UserDetails.propTypes = {
  user_detail: PropTypes.array.isRequired,
  message: PropTypes.string
}

export default UserDetails;
