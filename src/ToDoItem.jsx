import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { ToDoContext } from "./context";

export default function ToDoItem({ id, nameTodo, completed }) {
  const { dispatch } = useContext(ToDoContext);

  return (
    <li className={`todo `}>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={() =>
            dispatch({
              type: "toggle",
              payload: id,
            })
          }
        />
        <span>{nameTodo}</span>

        <i
          onClick={() => {
            dispatch({
              type: "remove",
              payload: id,
            });
          }}
          className="material-icons red-text"
        >
          delete
        </i>
      </label>
    </li>
  );
}
