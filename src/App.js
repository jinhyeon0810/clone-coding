import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import Header from "./components/Header/Header";
import { useContext, useState } from "react";
import styles from "./components/Header/Header.module.css";
import { DarkModeProvider, useDarkMode } from "./components/Context/DarkModeContext";
import { HiMoon, HiSun } from "react-icons/hi";

function App() {
  const filters = ["all", "start", "finish"];
  const [filter, setFilter] = useState(filters[0]);

  return (
    <>
      <DarkModeProvider>
        <header className={styles.header}>
          <ul className={styles.filters}>
            {filters.map((item, i) => {
              return <Header key={i} item={item} filter={filter} filters={filters} setFilter={setFilter} />;
            })}
          </ul>
        </header>
        <TodoList filter={filter} setFilter={setFilter} />
      </DarkModeProvider>
    </>
  );
}

export default App;
