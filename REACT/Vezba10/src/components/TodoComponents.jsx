import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos, deleteTodo, toggleTodo } from "../actions/todosActions";
import Loading from "./Loading";
import Error from "./Error"; 

const TodoComponents = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todosReducers.todos);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    dispatch(fetchTodos())
      .then(() => setLoading(false))
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleCheckboxChange = (id) => {
    dispatch(toggleTodo(id)); 
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <div className="todo-list">
      {todos.map(({ id, title, completed }) => (
        <div className="todo-item" key={id}>
          <input
            type="checkbox"
            checked={completed}
            onChange={() => handleCheckboxChange(id)} 
          />
          <p className={completed ? "todo-title completed" : "todo-title"}>
            {id}. {title}
          </p>
          <button className="delete-button" onClick={() => handleDelete(id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoComponents;