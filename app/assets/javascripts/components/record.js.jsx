var Record = React.createClass({
  handleDelete: function(e){
    var props = this.props
    e.preventDefault();
    $.ajax({
      method: 'DELETE',
      url: "/records/" + props.record.id,
      dataType: 'JSON'
    })
    .done(function(){
      props.handleDeleteRecord(props.record);
    });
  },
  render: function(){
    return (
    <tr>
      <td>{this.props.record.date}</td>
      <td>{this.props.record.title}</td>
      <td>{amountFormat(this.props.record.amount)}</td>
      <td><a className= "btn btn-danger" onClick={this.handleDelete}>Delete</a></td>
    </tr>
    );
  }
});
