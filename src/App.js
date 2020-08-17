import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import TodoList from "./components/Todo/TodoList";
import Header from "./components/layout/Header";
import AddTodo from "./components/Todo/AddTodo";
import About from "./components/pages/About";
import uuid from "uuid";
import axios from "axios";

class App extends Component {
  state = {
    todos: [],
  };

  async componentDidMount() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    );
    this.setState({
      todos: response.data,
    });
  }

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

  deleteTodo = async (id) => {
    const response = await axios.delete(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );

    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  addTodo = async (todoTitle) => {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      {
        title: todoTitle,
        completed: false,
      }
    );

    this.setState({
      todos: [...this.state.todos, response.data],
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route
            exact
            path="/"
            render={(props) => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <TodoList
                  todoList={this.state.todos}
                  markComplete={this.markComplete}
                  deleteTodo={this.deleteTodo}
                />
              </React.Fragment>
            )}
          />

          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
