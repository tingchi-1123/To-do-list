import { useState } from "react";
import CreateFrom from "./CreateForm";
import Todo from "./Todo";

function TodoWrappers() {
  const [todos, setTodos] = useState([
    {
      content: "運動",
      id: Math.random(),
      isCompleted: false,
      isEditing: false,
    },
    {
      content: "洗衣服",
      id: Math.random(),
      isCompleted: false,
      isEditing: false,
    },
  ]);
  const addTodo = (content) => {
    setTodos([...todos, { content, id: Math.random() }]);
  };
  const deleteTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id != id;
      })
    );
  };

  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo;
      })
    );
  };

  const toggleIsEditing = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo;
      })
    );
  };

  const editTodo = (id, newContent) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, content: newContent, isEditing: false }
          : todo;
      })
    );
  };

  return (
    <div className="wrapper">
      <h1>待辦事項</h1>
      <CreateFrom addTodo={addTodo} />
      {todos.map((todo) => {
        return (
          <Todo
            toggleCompleted={toggleCompleted}
            toggleIsEditing={toggleIsEditing}
            editTodo={editTodo}
            todo={todo}
            key={todo.id}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </div>
  );
}

export default TodoWrappers;
