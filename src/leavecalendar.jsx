import React from 'react';

var url = 'leave.api';

class Record extends React.Component {
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

class RecordList extends React.Component {
  render() {
    var itemNodes = this.props.data.map(function(item) {
      return (
        <tr key={item.id}>
          <td>{item.othernames} {item.surname}</td>
          <td>{item.annual}</td>
          <td>{item.designation}</td>
          <td>{item.gender}</td>
          <td>{item.email}</td>
        </tr>
      );
    });
    return (
    <div className="col-sm-8">
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

class LeaveCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: {leave_record:[]}}
  }

  loadRecordsFromServer() {
      $.ajax({
        url: url,
        dataType: 'json',
        cache: false,
        success: (data) => {
          this.setState({data: data});
        },
        error: function(xhr, status, err) {
          console.error(url, status, err.toString());
        }.bind(this)
      });
    }

  componentDidMount() {
    this.loadRecordsFromServer();
  }

  componentWillUnmount() {
    this.loadRecordsFromServer.abort();
  }

  render() {
    return (
      <div className="leaveCalendar">
        <RecordList data={this.state.data.leave_record} />
      </div>
    );
  }
}

module.exports = LeaveCalendar;
