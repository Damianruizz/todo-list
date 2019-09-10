// src/js/components/Form.jsx
import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addTask } from "../actions/index";
function mapDispatchToProps(dispatch) {
  return {
    addTask: task => dispatch(addTask(task))
  };
}
class ConnectedForm extends Component {
  constructor() {
    super();
    this.state = {
      taskName: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { taskName } = this.state;
    const id = uuidv1();
    this.props.addTask({ taskName, id });
    this.setState({ taskName: "" });
  }
  render() {
    const { taskName } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="taskName">Task Name</label>
          <input
            type="text"
            className="form-control"
            id="taskName"
            value={taskName}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          SAVE
        </button>
      </form>
    );
  }
}
const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;