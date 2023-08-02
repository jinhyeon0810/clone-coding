import React, { useEffect, useState } from "react";

import Header from "../Header/Header";
import styles from "./TodoList.module.css";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";
import { useDarkMode } from "../Context/DarkModeContext";
import { HiMoon, HiSun } from "react-icons/hi";

export default function TodoList({ filter, setFilter }) {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [todos, setTodos] = useState(() => getTodos());

  function filteredTodos() {
    if (filter === "all") {
      return todos;
    }
    if (filter === "start") {
      return todos.filter((todo) => {
        return todo.status === "start";
      });
    }
    if (filter === "finish") {
      return todos.filter((todo) => {
        return todo.status === "finish";
      });
    }
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function getTodos() {
    const todo = localStorage.getItem("todos");
    return todo ? JSON.parse(todo) : [];
  }

  const getData = filteredTodos();

  console.log(todos);
  console.log(getData);
  return (
    <>
      <section className={styles.container}>
        <ul className={styles.list}>
          {getData.map((todo) => {
            return (
              <Todo
                todo={todo}
                key={todo.id}
                todos={todos}
                setTodos={setTodos}
              />
            );
          })}
        </ul>
        <button className={styles.button} onClick={toggleDarkMode}>
          {!darkMode && <HiMoon />} {darkMode && <HiSun />}
        </button>

        <AddTodo todos={todos} setTodos={setTodos} />
      </section>
    </>
  );
}
