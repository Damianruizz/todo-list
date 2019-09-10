// src/js/components/List.jsx
import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { tasks: state.tasks };
};

const ConnectedList = ({ tasks }) => (
  <ul className="list-group list-group-flush">
    {tasks.map(el => (
      <li className="list-group-item" key={el.id}>
        {el.taskName}
      </li>
    ))}
  </ul>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;