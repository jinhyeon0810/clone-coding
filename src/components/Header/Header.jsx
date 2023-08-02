import React, { useState } from "react";
import styles from "./Header.module.css";
import { useDarkMode } from "../Context/DarkModeContext";
import { HiMoon, HiSun } from "react-icons/hi";

export default function Header({ filter, filters, setFilter, item }) {
  const onClickFilter = () => {
    setFilter(item);
  };

  console.log(filter);
  console.log(item);

  return (
    <>
      <header>
        <li>
          <button
            onClick={() => onClickFilter(item)}
            className={`${styles.filter} ${filter === item && styles.selected}`}
          >
            {item}
          </button>
        </li>
      </header>
    </>
  );
}
