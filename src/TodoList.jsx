import React from "react";
import ToDoItem from "./ToDoItem";

export default function TodoList({ state }) {
  return (
    <ul>
      {state.map((item) => (
        <ToDoItem key={item.id} {...item} />
      ))}
    </ul>
  );
}
