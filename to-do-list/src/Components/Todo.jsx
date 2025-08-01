import { RiDeleteBin5Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import EditForm from "./Editform";

function Todo({
  todo,
  deleteTodo,
  toggleCompleted,
  toggleIsEditing,
  editTodo,
}) {
  return todo.isEditing ? (
    <EditForm todo={todo} editTodo={editTodo} />
  ) : (
    <div className={`todo ${todo.isCompleted ? "completed" : ""}`}>
      <p
        onClick={() => {
          toggleCompleted(todo.id);
        }}
      >
        {todo.content}
      </p>
      <div>
        <FaRegEdit
          style={{ cursor: "pointer" }}
          onClick={() => {
            toggleIsEditing(todo.id);
          }}
        />
        <RiDeleteBin5Line
          style={{ cursor: "pointer", marginLeft: "5px" }}
          onClick={() => {
            deleteTodo(todo.id);
          }}
        />
      </div>
    </div>
  );
}
export default Todo;
