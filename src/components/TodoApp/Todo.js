import { FaTrashAlt } from "react-icons/fa";


const Todo = ({ todo, onComplete, onDelete, onEdit }) => {
  return (
    <div className="todo">
      <div className={` ${todo.isCompleted ? "completed" : "todoText"}`}>
        {todo.text}
      </div>
      <div style={{display: "flex"}}>

        <input onClick={onComplete} className="checkbox-todo" type="checkbox" />
        <button className="btnEdit-todo" onClick={onEdit}>
          <img className="img-edit" src="images/edit.png" />
        </button>
        <button className="btnDelete-todo" onClick={onDelete}>
        <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default Todo;
