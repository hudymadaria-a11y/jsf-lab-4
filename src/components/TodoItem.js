import React from "react";

class TodoItem extends React.Component {
  render() {
    const { todo, handleChangeProps, deleteTodoProps } = this.props;

    const todoStyle = {
      backgroundColor: "#ece6e6ff",
      padding: "10px",
      borderRadius: "5px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "8px",
    };

    return (
      <li className="todo-item" style={todoStyle}>
        <div>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleChangeProps(todo.id)}
          />
          <span style={{ marginLeft: "10px" }}>{todo.title}</span>
        </div>
        <button onClick={() => deleteTodoProps(todo.id)}>Delete</button>
      </li>
    );
  }
}

export default TodoItem;
