import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    todo: "",
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitTodo = (e) => {
    e.preventDefault();

    if (this.state.todo === "") {
      alert("Please Enter something in the box!");
    } else {
      this.props.addTodo(this.state.todo);
      this.setState({
          todo: ''
      })
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitTodo} style={{ display: "flex" }}>
          <input
            style={{
              flex: "10",
              padding: "10px",
            }}
            type="text"
            name="todo"
            value={this.state.todo}
            placeholder="Let's get going..."
            onChange={this.onChange}
          ></input>
          <input
            type="submit"
            value="Add Todo"
            style={{
              background: "black",
              color: "white",
              marginLeft: "10px",
              marginRight: "10px",
              fontWeight: "bold",
              padding: "10px",
              borderRadius: "20px",
            }}
          />
        </form>
      </div>
    );
  }
}

export default AddTodo;
