import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

export class TodoList extends Component {
  static propTypes = {
    todoList: PropTypes.array.isRequired,
  };
  render() {
    return (
      <div>
        {this.props.todoList.map((todoItem) => (
          <TodoItem
            key={todoItem.id}
            todoItem={todoItem}
            markComplete={this.props.markComplete}
            deleteTodo={this.props.deleteTodo}
          />
        ))}
      </div>
    );
  }
}

export default TodoList;
