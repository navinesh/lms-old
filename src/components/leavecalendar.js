import React, { Component, PropTypes } from 'react'

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
      <div className="table-responsive">
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

class Leaves extends Component {
  render() {
    return (
        <RecordList records={this.props.records} />
    );
  }
}

Leaves.propTypes = {
  records: PropTypes.array.isRequired
}

export default Leaves;
