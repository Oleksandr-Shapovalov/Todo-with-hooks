import { useReducer, useEffect, useState } from "react";
import TodoList from "./TodoList";
import reducer from "./reduser.js";
import { ToDoContext } from "./context";

function App() {
  const [nameTodo, setNameTodo] = useState("");
  const [state, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem("todos")) || []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state));
  }, [state]);
  const addTodo = (e) => {
    if (e.key === "Enter") {
      dispatch({
        type: "add",
        payload: nameTodo,
      });
      setNameTodo("");
    }
  };

  return (
    <ToDoContext.Provider value={{ dispatch }}>
      <div className="container">
        <h1>Todo App</h1>
        <div className="input-field">
          <input
            id="todoText"
            type="text"
            value={nameTodo}
            onChange={(e) => {
              setNameTodo(e.target.value);
            }}
            onKeyDown={addTodo}
          />
          <label htmlFor="todoText">Todo name</label>
        </div>
        <TodoList state={state} />
      </div>
    </ToDoContext.Provider>
  );
}

export default App;
