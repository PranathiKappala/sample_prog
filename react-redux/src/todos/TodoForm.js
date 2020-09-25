import React from "react"

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    React.findDOMNode(this.refs.itemName).focus();
  }
  onSubmit(event) {
    event.preventDefault();
    var input = React.findDOMNode(this.refs.itemName);
    var newItemValue = input.value;
    if(newItemValue) {
      this.props.addItem({newItemValue});
      input.value = '';
    }
  }
  render () {
    return (
      <form onSubmit={this.onSubmit} className="form-inline">
        <input type="text" ref="itemName" className="form-control"
        	placeholder="add a new todo..."/>
        <button type="submit" className="btn btn-default">Add</button>
      </form>
    );
  }
}
export default TodoForm;
