import React, { PropTypes } from 'react'
import { Link } from 'react-router'

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
      <div className="col-xs-12 col-sm-12">
        <div className="card card-block">
          <h5 className="card-title">Pending</h5>
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
      <div className="col-xs-12 col-sm-12">
        <div className="card card-block">
          <h5 className="card-title">Approved</h5>
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
    return (
      <div key={user.id}>
        <div className="col-xs-12 col-sm-12">
        <div className="card card-block">
        <div className="col-sm-3 p-b-2">
          <h5>{user.othernames} {user.surname}</h5>
        </div>
        <div className="col-sm-7">
          <ul className="list-inline">
            <li className="list-inline-item">
              Annual&nbsp;
              <span className="tag tag-primary tag-pill">{user.annual}</span>
            </li>
            <li className="list-inline-item m-l-2">
              Sick&nbsp;
              <span className="tag tag-primary tag-pill">{user.sick}</span>
            </li>
            <li className="list-inline-item m-l-2">
              Bereavment&nbsp;
              <span className="tag tag-primary tag-pill">{user.bereavement}</span>
            </li>
            <li className="list-inline-item m-l-2">
              Christmas&nbsp;
              <span className="tag tag-primary tag-pill">{user.christmas}</span>
            </li>
            {user.maternity ?
              <li className="list-inline-item m-l-2">
                Maternity&nbsp;
                <span className="tag tag-primary tag-pill">{user.maternity}</span>
              </li>
              : ''}
          </ul>
        </div>
        <div className="col-sm-2 text-xs-right">
          <Link to="/reset" className="card-link">Change password</Link>
        </div>
      </div>
    </div>
      </div>
    )
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
      <div className="row">
        <UserRecordList user_record={user_record} message={message} />
        <PendingRecordList user_record={user_record} />
        <ApprovedRecordList user_record={user_record} />
      </div>
    </div>
  )
}

UserRecord.propTypes = {
  user_record: PropTypes.array.isRequired,
  message: PropTypes.string
}

export default UserRecord
