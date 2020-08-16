import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  static propTypes = {
    todoItem: PropTypes.object.isRequired,
  };

  getTodoItemStyle = () => {
    return {
      cursor: "pointer",
      padding: "10px",
      background: "tomato",
      fontSize: "18px",
      borderBottom: " 1px dotted",
      textDecoration: this.props.todoItem.completed ? "line-through" : "none",
    };
  };

  render() {
    const { id, title } = this.props.todoItem;
    return (
      <div style={this.getTodoItemStyle()}>
        <p style={{ color: "white" }}>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
          <button style={butonStyle} onClick={this.props.deleteTodo.bind(this, id)}>X</button>
        </p>
      </div>
    );
  }
}

const butonStyle = {
  float: "right",
  color: "white",
  background: "green",
  borderRadius: "50px",
  cursor: "pointer",
  padding: "5px 9px"
};

export default TodoItem;
