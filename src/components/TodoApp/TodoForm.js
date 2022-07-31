import { useEffect, useRef, useState } from "react";
import Swal from 'sweetalert2';


const TodoForm = ({ edit , submitTodo}) => {
    const inputRef = useRef(null);
  const [input, setInput] = useState(edit ? edit.text : "");

  useEffect(()=>{
    inputRef.current.focus();
  },[]);

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!input) {
     Swal.fire({
      title : 'Please Enter Task',
      icon : "error"
    });
      return;
    } else {
      submitTodo(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="formControl">
        <input
          className="input-todo"
          type="text"
          value={input}
          onChange={changeHandler}
          placeholder={edit ? "Update Todo... " : "Add Todo"}
          ref={inputRef}
        />
        <button
          className={`btn ${edit ? "Update Todo" : "add Todo"}`}
          type="submit"
        >
          {edit ? "Update" : "Add"}
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
