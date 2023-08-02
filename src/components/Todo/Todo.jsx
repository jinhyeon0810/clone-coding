import React from "react";
import styles from "./Todo.module.css";

export default function Todo({ todo, todos, setTodos }) {
  const onClickDelete = (todo) => {
    if (todo.status === "start") return;
    setTodos(todos.filter((item) => item.id !== todo.id));
  };

  //input checkbox 표시 유무에 따라 label안의 state로 보관되어있는 값의 value 값이 변화하게 하는 문법
  const onChange = (e, todo) => {
    if (e.target.checked) {
      setTodos(
        todos.map((item) => {
          return item.id === todo.id ? { ...item, status: "finish" } : item;
        })
      );
    }
    if (!e.target.checked) {
      setTodos(
        todos.map((item) => {
          return item.id === todo.id ? { ...item, status: "start" } : item;
        })
      );
    }
  };

  return (
    <div>
      <li className={styles.todo}>
        <input
          type="checkbox"
          id={todo.id}
          checked={todo.status === "finish"}
          onChange={(e) => onChange(e, todo)}
          className={styles.checkbox}
        />
        <label htmlFor={todo.id} className={styles.text}>
          {todo.text}
        </label>
        <span className={styles.icon}>
          <button onClick={() => onClickDelete(todo)} className={styles.button}>
            🗑
          </button>
        </span>
      </li>
    </div>
  );
}
