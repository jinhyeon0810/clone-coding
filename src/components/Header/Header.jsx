import React from "react";
import styles from "./Header.module.css";

export default function Header({ filter, setFilter, item }) {
  const onClickFilter = () => {
    setFilter(item);
  };

  console.log(filter);
  console.log(item);

  return (
    <>
      <header>
        <li>
          <button onClick={() => onClickFilter(item)} className={`${styles.filter} ${filter === item && styles.selected}`}>
            {item}
          </button>
        </li>
      </header>
    </>
  );
}
