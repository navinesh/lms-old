import React, { PropTypes } from 'react'

const PendingRecordList = ({ user_record }) => {
  const userItems = []
  for (let x = 0; x < user_record.length; x++) {
    user_record[x].leaverecord.map((record) => {
      if (record.leave_status === 'pending') {
        userItems.push(<tr key={record.id}>
                    <td>{record.leave_name}</td>
                    <td>{record.leave_days} day(s)</td>
                    <td>{record.start_date}</td>
                    <td>{record.end_date}</td>
                    <td>{record.leave_reason}</td>
                  </tr>)
      }
      return (userItems)
    })
  }
  if(userItems.length > 0) {
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
    )
  }
  else {
    return (<div />)
  }
}

const ApprovedRecordList = ({ user_record }) => {
  const userItems = []
  for (let x = 0; x < user_record.length; x++) {
    user_record[x].leaverecord.map((record) => {
      if (record.leave_status === 'approved') {
        userItems.push(<tr key={record.id}>
                    <td>{record.leave_name}</td>
                    <td>{record.leave_days} day(s)</td>
                    <td>{record.start_date}</td>
                    <td>{record.end_date}</td>
                    <td>{record.leave_reason}</td>
                  </tr>)
      }
      return (userItems)
    })
  }
  if(userItems.length > 0) {
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
    )
  }
  else {
    return (<div />)
  }
}

const UserRecordList = ({ user_record, message }) => {
  if(message) {
    return (
      <div className="container text-xs-center" style={{paddingTop: '100px'}}>
        <div className="offset-sm-2 col-sm-8">
          <h1 className="display-4">The site configured at this address does not contain the requested resource.</h1>
        </div>
      </div>
    )
  }

  const userItem = user_record.map((user) => {
    if(user.maternity) {
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
            <div className="col-sm-3">
              <div className="card card-block text-xs-center">
                <h3 className="card-title">{user.maternity}</h3>
                <p className="card-text">Maternity</p>
              </div>
            </div>
          </div>
        </div>
      )
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
      )
    }
  })
  return (
    <div>
      {userItem}
    </div>
  )
}

const UserRecord = ({ user_record, message }) => {
  return (
    <div className="UserRecord">
      <UserRecordList user_record={user_record} message={message} />
      <div className="row">
        <div className="col-sm-12">
          <PendingRecordList user_record={user_record} />
        </div>
        <div className="col-sm-12">
          <ApprovedRecordList user_record={user_record} />
        </div>
      </div>
    </div>
  )
}

UserRecord.propTypes = {
  user_record: PropTypes.array.isRequired,
  message: PropTypes.string
}

export default UserRecord
