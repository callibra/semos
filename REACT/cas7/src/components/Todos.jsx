import { useState, useEffect } from "react";

export const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((json) => setTodos(json))
      .catch((err) => alert(err));
  }, []);

  function markTodoAsDone(todo) {
    setTodos([
      ...todos.map((item) =>
        item.id === todo.id ? { ...item, completed: !item.completed } : item
      ),
    ]);
  }
  
  return (
    <div id="todos">
      {todos.length > 0 ? (
        todos.map((todo) => {
          return (
            <div key={todo.id}>
              <p>{todo.title}</p>
              <input
                type="checkbox"
                checked={todo.completed}
                value={todo.completed}
                onChange={() => {
                  markTodoAsDone(todo);
                }}
              />
            </div>
          );
        })
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};
