import React, { Component, PropTypes } from 'react'

class Record extends Component {
  render() {
    return (
      <tr>
        <th>
          {this.props.children}
        </th>
      </tr>
    );
  }
}

class RecordList extends Component {
  render() {
    var itemNodes = this.props.records.map((record) => {
      return (
        <tr key={record.id}>
          <td>{record.user.othernames} {record.user.surname}</td>
          <td>{record.leave_name}</td>
          <td>{record.start_date}</td>
          <td>{record.end_date}</td>
          <td>{record.leave_days} day(s)</td>
        </tr>
      );
    });
    return (
    <div className="RecordList">
      <table className="table table-bordered table-hover" style={{fontSize: '15px'}}>
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
          {itemNodes}
        </tbody>
      </table>
    </div>
    );
  }
}

class LeaveCalendar extends Component {
  render() {
    return (
      <div className="leaveCalendar">
        <RecordList records={this.props.records} />
      </div>
    );
  }
}

LeaveCalendar.propTypes = {
  records: PropTypes.array.isRequired
}

export default LeaveCalendar;
