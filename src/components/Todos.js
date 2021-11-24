import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodos } from "../redux/reducer";

const Todos = (props) => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setTodo(e.target.value);
  };

  console.log(props);
  return (
    <div className="addTodos">
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        className="todo-input"
      />
      <button className="add-btn" onClick={() => dispatch(addTodos(todo))}>
        Add
      </button>
      <br />
      <ul>
        {todos?.map((item) => {
          return <li key={item.id}>{item.item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Todos;
