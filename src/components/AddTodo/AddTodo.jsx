import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./AddTodo.module.css";

export default function AddTodo({ todos, setTodos }) {
  const [text, setText] = useState("");

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) return;
    setTodos([...todos, { id: uuidv4(), text, status: "start" }]);
    setText("");
  };

  return (
    <div>
      {" "}
      <form onSubmit={onSubmit} className={styles.form}>
        <input
          placeholder="Add Todo"
          value={text}
          onChange={handleOnChange}
          className={styles.input}
        />
        <button className={styles.button}>Add</button>
      </form>
    </div>
  );
}
