import { useContext, createContext, useState, useEffect, useRef } from "react";
const TodoContext = createContext();
export function TodoProvider({ children }) {
  const [todoList, setTodoList] = useState([]);
  const first = useRef(true);
  useEffect(() => {
    const save = localStorage.getItem("todo-list");
    if (save) {
      setTodoList(JSON.parse(save));
    }
  }, []);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    localStorage.setItem("todo-list", JSON.stringify(todoList));
  }, [todoList]);
  return (
    <TodoContext.Provider value={{ todoList, setTodoList }}>
      {children}
    </TodoContext.Provider>
  );
}
export function useTodo() {
  return useContext(TodoContext);
}
