import React, { Component } from "react";
import "./App.css";
import TodoList from "./components/Todo/TodoList";
import Header from "./components/layout/Header";
import AddTodo from "./components/Todo/AddTodo";
import uuid from 'uuid';

class App extends Component {
  state = {
    todos: [
      { id: uuid.v4(), title: "Clean the room", completed: false },
      { id: uuid.v4(), title: "Take out the trash", completed: false },
      { id: uuid.v4(), title: "Buy Groceries", completed: false },
    ],
  };

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  deleteTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  addTodo = (todoTitle) => {
    console.log(todoTitle);
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid.v4(),
          title: todoTitle,
          completed: false,
        },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <AddTodo addTodo={this.addTodo} />
        <TodoList
          todoList={this.state.todos}
          markComplete={this.markComplete}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}

export default App;
