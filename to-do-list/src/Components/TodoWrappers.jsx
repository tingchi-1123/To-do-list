import { useState } from "react";
import CreateFrom from "./CreateForm";
import Todo from "./Todo";

function TodoWrappers() {
  const [todos, setTodos] = useState(["運動", "洗衣服"]);

  return (
    <div className="wrapper">
      <h1>待辦事項</h1>
      <CreateFrom />
      <Todo />
    </div>
  );
}

export default TodoWrappers;
